import React, { Component } from "react";
import simposio23 from "../assets/images/simposio23.jpeg";
import joao_campos from "../assets/images/joao_campos.jpg";

class Home extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">
            Seminários, Simpósios e Cursos Técnicos
          </h4>
          <div className="container">
            <div className="d-flex flex-column aling-items-center">
              <img src={joao_campos} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://www.linkedin.com/posts/jo%C3%A3o-carlos-pires-campos_aos-colegas-da-sst-e-tamb%C3%A9m-de-esg-da-constru%C3%A7%C3%A3o-activity-7173637161152462848-ghI6?utm_source=share&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4>
            </div>
            <div className="d-flex flex-column aling-items-center">
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
            {/* <div>
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
