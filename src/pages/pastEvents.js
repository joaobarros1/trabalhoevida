import React, { Component } from "react";
import premio from "../assets/images/premio.jpeg";

export class pastEvents extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">Próximos Eventos</h4>
          <div className="container">
            <img src={premio} alt="banner evento" />
            <h4 className="pt-4 pb-5">
              Ainda da tempo de se{" "}
              <a
                href="https://cbic.org.br/premio-seconci-sp-prazo-de-inscricoes-vai-ate-31-de-maio/?utm_campaign=cbic_hoje_23052023&utm_medium=email&utm_source=RD+Station"
                target="_blank"
                rel="noreferrer"
              >
                inscrever
              </a>{" "}
              no 7º Premio SECONCI SST.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default pastEvents;
