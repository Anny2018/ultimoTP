import React,{Component} from 'react';
import {getItineraris} from './action/citiesAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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

class Itineraris extends Component {
 

  constructor(props){
    super(props)
    this.state={

    }
  }

  static propTypes = {
    getItineraris: PropTypes.func.isRequired,
    itinerary: PropTypes.object.isRequired, 
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
      await this.props.getItineraris();
    }


    render() {
    /*   const itinerary = this.props.itineraris;
      console.log(itinerary); */
     /*  console.log(JSON.stringify(cities)) */
      return(
        <div>
        {/* <ul>
        {cities.map((elem, i)=>{return <button><li key={i}>{elem.name}</li></button>})           }
        </ul> */}
        </div>
   


  
      )
 
   
        
    }
};

const mapStateToProps= state =>{
  console.log(state.itinerary);
  
  return{
    itineraris:state.itinerary}
};

export default connect(mapStateToProps,{getItineraris})(Itineraris);