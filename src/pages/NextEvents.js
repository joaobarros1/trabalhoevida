import React, { Component } from "react";
import agenda from "../assets/images/agenda.jpeg";

export class NextEvents extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3 mt-5">Próximos Eventos</h4>
          <div className="container">
            <div>
              <img src={agenda} alt="banner evento" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NextEvents;
