import React,{Component} from 'react';
import {getCities} from './action/citiesAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
  
     componentDidMount(){
     /*  const res =  await axios.get('http://localhost:5000/api/city');
      this.setState({listaPaises:res.data.cities});
      console.log(this.state.listaPaises); */
      this.props.getCities();
    }


    render() {
      const cities = this.props.city.cities;
      console.log(cities);
      return(

        <div>
    
        <ul>
        {cities.map((elem, i)=>{return <li key={i}>{elem.name} </li>})}           
        </ul>
    </div>


        //{
          /* <div className="container">
        
            {
                cities.map(cities => {
                    return (
                        <div key={cities._id}>
                            <h5 > {cities.name}</h5>
                           
                        </div>
                    )
                })
            }

        
    </div> */
  //}
/* 
        <div>
        
        <ul>
        {cities.map((elem, i)=>{return <li key={i}>{elem.name}</li>})}           
        </ul>
    </div> */
       /*  <div>
        <div>
        {
             cities.map(cities => {
                 return (
                     <div key={cities._id}>
                         <h5 > {cities.name}</h5>
                         
                     </div>
                 )
             })
         }
        </div>
        </div> */
      )
 
   
        
    }
};

const mapStateToProps= state =>({
  city: state.city
});

export default  connect(mapStateToProps,{getCities})(Cities);