import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateCar from "./admincomponents/create-cars.component";
import EditCar from "./admincomponents/edit-cars.component";
import CarsList from "./admincomponents/cars-list.component";

import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="https://google.pl" target="_blank">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand">Admin Panel</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Cars</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Add Cars</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={CarsList} />
                    <Route path="/edit/:id" component={EditCar} />
                    <Route path="/create" component={CreateCar} />
                </div>
            </Router>
        );
    }
}

export default App;