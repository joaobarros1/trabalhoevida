import React, { Component } from "react";
import ribeirao from "../assets/images/ribeirao.jpeg";
import belohorizonte from "../assets/images/belohorizonte.jpg";

class Home extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">
            Seminários, Simpósios e Cursos Técnicos
          </h4>
          <div className="container">
            <div>
              <img src={belohorizonte} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/Xsv2Sng7YuCq1qX17"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4>
            </div>
            <div>
              <img src={ribeirao} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/wohAVpzcxb4dGkQz6"
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

export default Home;
