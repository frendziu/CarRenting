import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../logincomponnents/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../logincomponnents/actions/authActions";

import { Provider } from "react-redux";
import store from "../store";


import "bootstrap/dist/css/bootstrap.min.css";

import AdminPanel from "../admincomponents/App.js";
import Searching from "../searchcomponents/search.js";
import Form from "../formcomponents/form.js"

import image from "../image/meme.jpg"
import Login from "../login/Login";
import Register from "../register/Register";
import PrivateRoute from "../logincomponnents/private-route/PrivateRoute";
import Dashboard from "../logincomponnents/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

// Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./login";
    }
}


class Homepage extends Component {
    render() {
        return (
            <Provider store={store}>
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
                    <PrivateRoute path="/admin" exact component={AdminPanel}/>
                    <Route path="/register" exact component={Register}/>

                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
                <div className ="App">
                    <img  src={image} alt="fireSpot"/>
                </div>

            </Router>
            </Provider>
        );
    }
}

export default Homepage;