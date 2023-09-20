import React, { Component } from "react";
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
                  href="https://forms.gle/z2t93PUCJThQFG9j6"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4>
            </div>
            {/* <div>
              <img src={piracicaba} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/gALz1AU6QqjS2YCFA"
                  target="_blank"
                  rel="noreferrer"
                >
                  inscrição aqui
                </a>
                !
              </h4>
            </div>
            <div>
              <img src={campinas} alt="banner evento" />
              <h4 className="pt-4 pb-5">
                Garanta sua{" "}
                <a
                  href="https://forms.gle/b4A8VmhiSUFy4kZh7"
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
