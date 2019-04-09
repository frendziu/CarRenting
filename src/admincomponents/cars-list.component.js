import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cars = props => (
    <tr>
        <td>{props.car.car_name}</td>
        <td>{props.car.car_price}</td>
        <td>{props.car.car_type}</td>
        <td>{props.car.car_availability}</td>
        <td>
            <Link to={"/edit/"+props.car._id}>Edit</Link>
        </td>
    </tr>
)

export default class CarsList extends Component {

    constructor(props) {
        super(props);
        this.state = {cars: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cars/')
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    carList() {
        return this.state.cars.map(function(currentCar, i){
            return <Cars car={currentCar} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Car's List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Car name</th>
                        <th>Car price</th>
                        <th>Car type</th>
                        <th>Car availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.carList() }
                    </tbody>
                </table>
            </div>
        )
    }
}