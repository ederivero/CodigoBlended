import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Landing Page</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">

              <NavLink className="nav-link" to="/">
                Home
              </NavLink>

            </li>
            <li className="nav-item">

              <NavLink className="nav-link" to="/ciudades">
                Ciudades
              </NavLink>

            </li>
            <li className="nav-item">

              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
