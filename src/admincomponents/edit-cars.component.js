import React, { Component } from 'react';
import axios from 'axios';

export default class EditCar extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/cars/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    car_name: response.data.car_name,
                    car_price: response.data.car_price,
                    car_type: response.data.car_type,
                    car_availability: response.data.car_availability
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeCarAvailability(e) {
        this.setState({
            car_availability: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            car_name: this.state.car_name,
            car_price: this.state.car_price,
            car_type: this.state.car_type,
            car_availability: this.state.car_availability
        };
        console.log(obj);
        axios.post('http://localhost:4000/cars/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Car Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.car_name}
                                onChange={this.onChangeCarName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Car Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.car_price}
                            onChange={this.onChangeCarPrize}
                        />
                    </div>
                    <div className="form-group">
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


                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}