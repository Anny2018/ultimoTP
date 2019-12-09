import React,{Component} from 'react';
import {getCities} from './action/citiesAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Itineraris from './itineraris';
import {Link} from 'react-router-dom'
/* import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
})); */

class Cities extends Component {
 

  constructor(props){
    super(props)
    this.state={
      term:""
    }
  }

  static propTypes = {
    getCities: PropTypes.func.isRequired,
    city: PropTypes.object.isRequired, 
  // isAuthenticated: PropTypes.bool
};
  /*   state ={
        listaPaises: []
    } */
 /*    static propType={
      getCities:this.propType.func.isRequired,
      city:PropTypes.object.isRequired
    }; */
  
     async componentDidMount(){
     /*  const res =  await axios.get('http://localhost:5000/api/city');
      this.setState({listaPaises:res.data.cities});
      console.log(this.state.listaPaises); */
      await this.props.getCities();
    }

    /* search(event) {
      this.setState({ term: event.target.value });
    } */


    render() {
      const cities = this.props.cities;
      console.log(cities);
     /*  console.log(JSON.stringify(cities)) */
      return(
    <Router>
     <div>

     {
                cities.map(cities => {
                         return (
                                        <div key={cities._id} >
                                                <h5 > {cities.name}</h5>
                                                <Itinerary name={cities.name} />
                                            </div>
                                        )
                                    })
    }

			
    </div>
   </Router>)
}
}

const mapStateToProps= state =>{
  console.log(state);
  
  return{
  cities: state.city.cities}
};

export default  connect(mapStateToProps,{getCities})(Cities);

/* Link to={`/itineraries/${cities.name}`}> */

							/* <button >
								<Link to={Itineraris}>
									{ciudad.name} - {ciudad.country}
                  <Itineraris/>
								</Link>
							</button> */
						
			/* 		)
				})}
			



      
        <ul>
        {cities.map((elem, i)=>{return <button><li key={i}>{elem.name}</li></button>})           }
        </ul> */

/* {
  cities.map(cities => {
      return (
          <div key={cities._id} >
              <h5 > {cities.name}</h5>
              <Itineraris name={cities.name} />
          </div>
      )
  })
} */

/* 	{ cities.map(ciudad => {
				/* 	let rutaciudad = '' + ciudad.name; */
				//return(
        //<React.Fragment key={ciudad._id}>
         
          //<Route path="/" component={Itineraris} />
        //</React.Fragment>
        //)
         
         
      //})} */}