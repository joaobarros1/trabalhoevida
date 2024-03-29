import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export class Header extends Component {
  render() {
    return (
      <header
        className="d-flex justify-content-between"
        style={{ backgroundColor: "#ccc" }}
      >
        <nav className="navbar navbar-expand-md w-100 p-2">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img
                src={logo}
                className="logo"
                alt="logo"
                style={{ maxWidth: 200 }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li>
                  <Link to={"/about"} className="nav-link">
                    Sobre
                  </Link>
                </li>
                {/* <li>
                  <Link to={"/contact"} className="nav-link">
                    Contato
                  </Link>
                </li> */}
                <li>
                  <Link to={"/courses"} className="nav-link">
                    Cursos
                  </Link>
                </li>
                {/* <li>
                  <Link to={"/next-events"} className="nav-link">
                    Próximos Eventos
                  </Link>
                </li> */}
                <li>
                  <Link to={"/partners-events"} className="nav-link">
                    Eventos de Parceiros
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
