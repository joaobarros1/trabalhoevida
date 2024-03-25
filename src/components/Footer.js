import React, { Component } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/images/facebook.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import YoutubeIcon from "../assets/images/youtube.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-light text-center main-footer footer">
        <div className="container p-2">
          <div className="row">
            <div className="col-1"></div>
            <Link
              to={"https://wa.me/5513981105347"}
              className="col-2"
              target="_blank"
              title="Send an email"
              rel="noopener noreferrer"
            >
              <img src={WhatsappIcon} alt="Whatsapp" style={{ maxWidth: 24 }} />
            </Link>
            <Link
              to={"https://www.instagram.com/institutotrabalhoevida/"}
              className="col-2"
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
              className="col-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="Linkedin" style={{ maxWidth: 24 }} />
            </Link>
            <Link
              to={"https://www.facebook.com/trabalhoevida"}
              className="col-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" style={{ maxWidth: 24 }} />
            </Link>
            <Link
              to={"https://www.youtube.com/@institutotrabalhoevida3141"}
              className="col-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={YoutubeIcon} alt="Youtube" style={{ maxWidth: 24 }} />
            </Link>
            <div className="col-1"></div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <p>© 2023 - Instituto Trabalho e Vida</p>
          <p>institutotrabalhoevida@gmail.com</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
