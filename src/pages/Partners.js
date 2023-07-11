import React, { Component } from "react";
import unnamed from "../assets/images/unnamed.jpg";
import unnamed1 from "../assets/images/unnamed (1).jpg";
import unnamed2 from "../assets/images/unnamed (2).jpg";
import unnamed3 from "../assets/images/unnamed (3).jpg";
import unnamed4 from "../assets/images/unnamed (4).jpg";

export class NextEvents extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3 mt-5">Eventos de Parceiros</h4>
          <div className="container">
            <div className="d-flex flex-column align-items-center">
              <img src={unnamed} alt="banner evento" />
              <img src={unnamed1} alt="banner evento" />
              <img src={unnamed2} alt="banner evento" />
              <img src={unnamed3} alt="banner evento" />
              <img src={unnamed4} alt="banner evento" />
              <a
                href="https://inscricaodeeventos.com.br/informa/concreteshow/2023/usuario/index.asp?vendedor=ABCIC"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary m-3">Inscreva-se</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NextEvents;
