import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteCars extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        axios.get('http://localhost:4000/form/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    subject: response.data.subject
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            subject: this.state.subject
        };
        console.log(obj);
        axios.delete('http://localhost:4000/form/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/admin/forms');
    }
    render()
    {
        return (
            <div>
                <h3 align="center">Delete Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="Delete Form" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
