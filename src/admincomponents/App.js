import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateCar from "./create-cars.component";
import EditCar from "./edit-cars.component";
import CarsList from "./cars-list.component";
import DeleteCar from "./delete-cars.component";
import FormList from "./form-list.component";
import DeleteForm from "./delete-form.component"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <Link to="/admin/" className="navbar-brand">Admin Panel</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/admin/" className="nav-link">Cars</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/admin/create/" className="nav-link">Add Cars</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/admin/forms/" className="nav-link">Messages</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/admin/" exact component={CarsList} />
                    <Route path="/admin/edit/:id" component={EditCar} />
                    <Route path="/admin/create" component={CreateCar} />
                    <Route path="/admin/delete/:id" component={DeleteCar} />
                    <Route path="/admin/forms" component={FormList} />
                    <Route path="/admin/forms/delete/:id" component={DeleteForm} />
            </div>
            </Router>
        );
    }
}

export default App;