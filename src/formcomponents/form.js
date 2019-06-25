import React, { Component } from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import "./styless.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


class Form extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            subject: ''
        }
    }



    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeSubject(e){
        this.setState({
            subject: e.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault();

        console.log(`Form saved:`);
        console.log(`First Name: ${this.state.first_name}`);
        console.log(`Last Name: ${this.state.last_name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Subject: ${this.state.subject}`);

        const newForm = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            subject: this.state.subject
        };

        axios.post('http://localhost:4000/form/add', newForm)
            .then(res => console.log(res.data));

        this.setState({
            fist_name: '',
            last_name: '',
            email: '',
            subject: ''
        })
    }


    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/form" className="navbar-brand">Form</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">

                                </li>
                            </ul>

                        </div>
                    </nav>
                    <br/>


                </div>

                <div className="App">
                    <p>Contact Me</p>
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder="Your name.."
                                value={this.state.first_name}
                                onChange={this.onChangeFirstName}
                            />
                            </div>

                            <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Your last name.."
                                value={this.state.last_name}
                                onChange={this.onChangeLastName}
                            />
                            </div>

                            <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                            </div>

                            <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="subject"
                                placeholder="Write something.."
                                value={this.state.subject}
                                onChange={this.onChangeSubject}
                            />
                            </div>

                            <div className="form-group">
                            <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>

            </Router>
        );
    }
}

export default Form;