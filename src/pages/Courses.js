import React, { Component } from "react";
// import cursoPreparatorio from "../assets/files/cursoPreparatorio.pdf";
import CursoAltura from "../assets/images/curso-trabalho-altura.jpeg";

class Courses extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">Cursos Técnicos</h4>
          <div className="container">
            <div>
              {/* <embed src={cursoPreparatorio} width="900px" height="660px" /> */}
              <img src={CursoAltura} alt="banner evento" />
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
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
