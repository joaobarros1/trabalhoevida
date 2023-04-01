import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export class Header extends Component {
  render() {
    return (
      <header
        className="d-flex w-100 justify-content-between"
        style={{ backgroundColor: "#ccc" }}
      >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                src={logo}
                className="logo"
                alt="logo"
                style={{ maxWidth: 200 }}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li>
                  <Link to={"/"} class="nav-link active">
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
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
