import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteCars extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

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


        onSubmit(e)
        {
            e.preventDefault();
            const obj = {
                car_name: this.state.car_name,
                car_price: this.state.car_price,
                car_type: this.state.car_type,
                car_availability: this.state.car_availability
            };
            console.log(obj);
            axios.delete('http://localhost:4000/cars/delete/'+this.props.match.params.id, obj)
                .then(res => console.log(res.data));

            this.props.history.push('/admin');
        }
        render()
        {
            return (
                <div>
                    <h3 align="center">Delete Car</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="submit" value="Delete Car" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            )
        }
    }
