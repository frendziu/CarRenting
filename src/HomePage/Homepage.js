import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import AdminPanel from "../admincomponents/App.js";
import Searching from "../searchcomponents/search.js";
import Form from "../formcomponents/form.js"
import Login from "../logincomponents/login.js"
import image from "../image/meme.jpeg"

class Homepage extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">HomePage</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/search" className="nav-link">Search a product</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/form" className="nav-link">Contact Form</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/login" className="nav-link">Sign in/Sign up</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/admin" className="nav-link">Admin Panel</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                    <br/>
                    <Route path="/search" exact component={Searching}/>
                    <Route path="/form" exact component={Form}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/admin" exact component={AdminPanel}/>

                </div>
                <div className ="">
                    <img  src={image} alt="fireSpot"/>
                </div>

            </Router>
        );
    }
}

export default Homepage;