import React, { Component } from "react";
import encontro from "../assets/files/encontro_nacional.pdf";

class Courses extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">Cursos Técnicos</h4>
          <div className="container">
            <div>
              <embed src={encontro} width="900px" height="660px" />
              {/* <img src={CursoAltura} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Faça sua{" "}
                <a
                  href="https://doity.com.br/curso-risco-trabalho-em-altura"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
