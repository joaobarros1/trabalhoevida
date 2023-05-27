import React, { Component } from "react";
import spMaio23 from "../assets/images/sp-maio-2023.jpeg";
import portoAlegre23 from "../assets/images/portoAlegre23.jpeg";
import sjdc23 from "../assets/images/sjdc23.jpeg";

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
              <img src={sjdc23} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Evento realizado em 11 de maio de 2023
                {/* <a
                  href="https://forms.gle/eQdXq7jWgEt3DcCr8"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                ! */}
              </h4>
            </div>
            <div>
              <img src={portoAlegre23} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Evento realizado em 17 de maio de 2023
                {/* <a
                  href="https://forms.gle/gHWQLqowTvBkUfmr9"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                ! */}
              </h4>
            </div>
            <div>
              <img src={spMaio23} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Evento realizado em 23 de maio de 2023
                {/* <a
                  href="https://forms.gle/hTDrEUuxYdK3Dvya8"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                ! */}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
