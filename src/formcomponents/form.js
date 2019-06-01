import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styless.css"
import "bootstrap/dist/css/bootstrap.min.css";


class Form extends Component {
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
                        <form action="">
                            <label>First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />


                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </Router>
        );
    }
}

export default Form;