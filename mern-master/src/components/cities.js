import React from 'react';
import axios from 'axios';

export default class Cities extends React.Component {
    state ={
        listaPaises: []
    }
  
    async componentDidMount(){
      const res =  await axios.get('http://localhost:5000/api/city');
      this.setState({listaPaises:res});
      console.log(this.state.listaPaises);
    }


    render() {
        return(
     /*  <div>
        <h1>Lista de paises</h1>
        <ul>
          {this.state.listaPaises.map((elem,i)=>{return <li key={i}>{elem.name} {elem.country}</li>})}
        </ul>
      </div> */

      <div className="row">

      <div className="col-md-4">
          Paises
      </div>
      <div className="col-md-8">
          <ul className="list-group">
              {
                  this.state.listaPaises.map(pais => <li className="list-group-item list-group-item-action" key={pais._id}>
                    {pais.name} {pais.country}
                  </li>)
              }
          </ul>
      </div>
    

        </div>
        
      )
    }
};