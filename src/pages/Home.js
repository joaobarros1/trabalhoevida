import React, { Component } from "react";
import sorocaba23 from "../assets/images/sorocaba23.jpeg";
import saopaulo1023 from "../assets/images/saopaulo1023.jpeg";
import simposio23 from "../assets/images/simposio23.jpeg";
import rj from "../assets/images/rj.jpeg";

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
              <img src={rj} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/SRTtU11zvXNegN3B9"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4>
            </div>
            <div>
              <img src={simposio23} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/6NjQmrkjQTo3oT519"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4>
            </div>
            <div>
              <img src={saopaulo1023} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/1xMxsPk1MoVgfffi8"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4>
            </div>
            <div>
              <img src={sorocaba23} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/oFoGdraieV3gS1icA"
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
