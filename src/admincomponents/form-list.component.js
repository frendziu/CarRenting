import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Forms = props => (
    <tr>
        <td>{props.form.first_name}</td>
        <td>{props.form.last_name}</td>
        <td>{props.form.email}</td>
        <td>{props.form.subject}</td>
        <Link to={"delete/"+props.form._id}>Delete</Link>
    </tr>
)

export default class FormsList extends Component {

    constructor(props) {
        super(props);
        this.state = {forms: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/form/')
            .then(response => {
                this.setState({ forms: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    formList() {
        return this.state.forms.map(function(currentForm, i){
            return <Forms form={currentForm} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Messages</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.formList() }
                    </tbody>
                </table>
            </div>
        )
    }
}