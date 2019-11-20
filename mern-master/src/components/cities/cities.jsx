/* import React, { Component } from 'react';
import { connect } from 'react-redux';
import allCities from '../action/citiesAction';

//con esta funcion se suscribe a los cambios
const mapeaEstadoscomoProps = state => {
    return {
        cities: state.reducerCities.cities
    }
}

//esto devuelve el estado del reduce//acciones de envio
const mapDispatchToProps = (dispatch) => {
    return {
        allCities: () => dispatch(allCities())
    };
};

class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            citiesFilter: [],
        }

    }
    async componentDidMount() {

        await this.props.allCities();
        console.log(this.props.cities);
        this.setState({ citiesFilter: this.props.cities })

    }

    filterCities = (e) => {
        let filteredCities = this.props.cities;
        filteredCities = filteredCities.filter((city) => {
            let cityName = city.name.toLowerCase() + city.country.toLowerCase()
            return cityName.indexOf(
                e.target.value.toLowerCase()) !== -1
        })
        this.setState({
            citiesFilter: filteredCities
        })
    }

    render() {
        return (
            <div>
                <h1>Cities</h1>
                <ul>
                    {this.props.cities.map((elem, i) => {
                        return (
                            <div>
                                <li key={i}>{elem.name} {elem.country}</li>
                                <img src={elem.url} alt="img-city" />
                            </div>
                        )
                    })}

                </ul>
                <label htmlFor="">filtro</label>
                <input

                    onChange={this.filterCities}
                ></input>
                <ul>
                    {this.state.citiesFilter.map((elem, i) => { return <li key={i}>{elem.name} {elem.country}</li> })}
                </ul>

            </div>
        )
    }
}
export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Cities); */