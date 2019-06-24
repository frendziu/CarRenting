import React, { Component } from 'react';
import axios from 'axios';

const Cars = props => (
    <tr>
        <td>{props.car.car_name}</td>
        <td>{props.car.car_price}</td>
        <td>{props.car.car_type}</td>
        <td>{props.car.car_availability}</td>
    </tr>
)

class productsRead extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search:'',
            cars: []};
    }

    updateSearch(e){
        this.setState({search:e.target.value.substr(0,20)});
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

    filteredList(){
        return this.state.cars.filter(
            (filt)=>
                filt.car_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        ).map(function(currentCar, i){
            return <Cars car={currentCar} key={i} />;
        })
    }

    render() {
        let filteredProducts = this.props.Cars;
        return (
            <div>
                <input type="text"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
                       placeholder={'search by name'}/>



                <table className="table table-bordered" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.filteredList()}
                    </tbody>
                </table>
            </div>


        )
    }
}
export default productsRead;