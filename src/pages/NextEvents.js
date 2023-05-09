import React, { Component } from "react";
import abrasfe from "../assets/images/abrasfe.jpeg";

export class NextEvents extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">Próximos Eventos</h4>
          <div className="container">
            <img src={abrasfe} alt="banner evento" />
            <h4 className="pt-4 pb-5">
              Garanta sua vaga gratuitamente{" "}
              <a
                href="https://doity.com.br/live-abrasfe-academy-formas-concreto-pavimentos-verticais"
                target="_blank"
                rel="noreferrer"
              >
                aqui
              </a>
              !
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default NextEvents;
