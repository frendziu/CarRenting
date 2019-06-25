import React, { Component } from 'react';
import axios from 'axios';
//import Select from 'react-select'
//import DropDownList  from 'react-dropdown'

export default class CreateCars extends Component {
    constructor(props) {
        super(props);

        this.onChangeCarName = this.onChangeCarName.bind(this);
        this.onChangeCarPrize = this.onChangeCarPrize.bind(this);
        this.onChangeCarType = this.onChangeCarType.bind(this);
        this.onChangeCarAvailability = this.onChangeCarAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            car_name: '',
            car_price: '',
            car_type: '',
            car_availability: ''
        }
    }



    onChangeCarName(e) {
        this.setState({
            car_name: e.target.value
        });
    }

    onChangeCarPrize(e) {
        this.setState({
            car_price: e.target.value
        });
    }

    onChangeCarType(e) {
        this.setState({
            car_type: e.target.value
        });
    }
    onChangeCarAvailability(e){
        this.setState({
            car_availability: e.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault();

        console.log(`Car saved:`);
        console.log(`Car Name: ${this.state.car_name}`);
        console.log(`Car Price: ${this.state.car_price}`);
        console.log(`Car Type: ${this.state.car_type}`);
        console.log(`Car availability: ${this.state.car_availability}`);

        const newCar = {
            car_name: this.state.car_name,
            car_price: this.state.car_price,
            car_type: this.state.car_type,
            car_availability: this.state.car_availability
        };

        axios.post('http://localhost:4000/cars/add', newCar)
            .then(res => console.log(res.data));

        this.setState({
            car_name: '',
            car_price: '',
            car_type: '',
            car_availability: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Car name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.car_name}
                                onChange={this.onChangeCarName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Car Price: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.car_price}
                            onChange={this.onChangeCarPrize}
                        />
                    </div>

                    <div className= "form-group">
                        <label>Car Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.car_type}
                            onChange={this.onChangeCarType}
                        />

                    </div>

                    <label>Car availability: </label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="availabilityOptions"
                                    id="availabilityYes"
                                    value="Available"
                                    checked={this.state.car_availability==='Available'}
                                    onChange={this.onChangeCarAvailability}
                            />
                            <label className="form-check-label">Available</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="availabilityOptions"
                                    id="availabilityNo"
                                    value="Inaccessible"
                                    checked={this.state.car_availability==='Inaccessible'}
                                    onChange={this.onChangeCarAvailability}
                            />
                            <label className="form-check-label">Inaccessible</label>
                        </div>

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}