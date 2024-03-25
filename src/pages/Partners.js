import React, { Component } from "react";
import seserj from "../assets/images/seserj.jpeg";
import seserj1 from "../assets/images/seserj1.jpeg";
import seserj2 from "../assets/images/seserj2.jpeg";
import seserj3 from "../assets/images/seserj3.jpeg";

export class NextEvents extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <h4 className="page-title p-3 my-3">Eventos de Parceiros</h4>
        <div className="d-flex flex-column">
          <div className="container">
            {/* <div className="d-flex flex-column align-items-center">
              <img src={} alt="banner evento" />
              <a
                href="https://doity.com.br/live-abrasfe-academy-audtioria-seguranca-trabalho"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary m-3">Inscreva-se</button>
              </a>
            </div>
            <hr class="hr" /> */}
            <div className="d-flex flex-column align-items-center pb-5">
              <img src={seserj} alt="banner evento" />
              <img src={seserj1} alt="banner evento" />
              <img src={seserj2} alt="banner evento" />
              <img src={seserj3} alt="banner evento" />
              {/* <a
                href="https://inscricaodeeventos.com.br/informa/concreteshow/2023/usuario/index.asp?vendedor=ABCIC"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary m-3">Inscreva-se</button>
              </a> */}
            </div>
            {/* <hr class="hr" />
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NextEvents;
