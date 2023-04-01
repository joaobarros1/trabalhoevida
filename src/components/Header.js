import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
