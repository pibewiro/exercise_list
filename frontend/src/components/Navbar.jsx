import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercise List</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/createUser" className="nav-link">Create User</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/createExercise" className="nav-link">Create Exercise</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
