import React, { Component } from "react";
import cursoRiscosEletricos from "../assets/files/cursoRiscosEletricos.pdf";

class Courses extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">Cursos Técnicos</h4>
          <div className="container">
            <div>
              <embed src={cursoRiscosEletricos} width="900px" height="700px" />
              <h4 className="pt-4 pb-5">
                Faça sua{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfb4xHXHOtSnkGfKmGhaCc_z_fDj0hhj6nAz3JOWJBDjn21RQ/viewform"
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
