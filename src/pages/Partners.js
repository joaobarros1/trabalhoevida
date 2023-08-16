import React, { Component } from "react";
import unnamed from "../assets/images/unnamed.jpg";
import unnamed1 from "../assets/images/unnamed (1).jpg";
import unnamed2 from "../assets/images/unnamed (2).jpg";
import unnamed3 from "../assets/images/unnamed (3).jpg";
import unnamed4 from "../assets/images/unnamed (4).jpg";
import abece1 from "../assets/images/abece1.jpg";
import abece2 from "../assets/images/abece2.jpg";
import abece from "../assets/images/abece.jpg";
import live from "../assets/images/live.jpeg";

export class NextEvents extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <h4 className="page-title p-3 my-3">Eventos de Parceiros</h4>
        <div className="d-flex flex-column">
          <div className="container">
            <div className="d-flex flex-column align-items-center">
              <img src={live} alt="banner evento" />
              <a
                href="https://doity.com.br/live-abrasfe-academy-audtioria-seguranca-trabalho"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary m-3">Inscreva-se</button>
              </a>
            </div>
            <hr class="hr" />
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
            <hr class="hr" />
            <div className="d-flex flex-column align-items-center">
              <img src={abece1} alt="banner evento" />
              <img src={abece2} alt="banner evento" />
              <img src={abece} alt="banner evento" />
              <a
                href="https://site.abece.com.br/formulario-6o-simposio-abece-universidades-de-engenharia-de-estruturas-aplicacoes-do-concreto-de-ultra-alto-desempenho/"
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
