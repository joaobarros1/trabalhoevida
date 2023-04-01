import React, { Component } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/images/facebook.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-light text-center fixed-bottom main-footer mx-auto">
        <div className="container p-2">
          <div className="row">
            <Link
              to={"https://www.facebook.com/trabalhoevida"}
              className="col-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" style={{ maxWidth: 24 }} />
            </Link>
            <Link
              to={"https://www.instagram.com/institutotrabalhoevida/"}
              className="col-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                style={{ maxWidth: 24 }}
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/instituto-trabalho-e-vida/"}
              className="col-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="Linkedin" style={{ maxWidth: 24 }} />
            </Link>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: Instituto Trabalho e Vida
        </div>
      </footer>
    );
  }
}

export default Footer;
