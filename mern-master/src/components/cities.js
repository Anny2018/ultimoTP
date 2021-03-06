import React,{Component} from 'react';
import {getCities} from './action/citiesAction';
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

class Cities extends Component {
 

  constructor(props){
    super(props)
    this.state={

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


    render() {
      const cities = this.props.cities;
      console.log(cities);
     /*  console.log(JSON.stringify(cities)) */
      return(
      <div>
        <ul>
        {cities.map((elem, i)=>{return <button><li key={i}>{elem.name}</li></button>})           }
        </ul>
     </div>
      )
 
   
        
    }
};

const mapStateToProps= state =>{
  console.log(state);
  
  return{
  cities: state.city.cities}
};

export default  connect(mapStateToProps,{getCities})(Cities);