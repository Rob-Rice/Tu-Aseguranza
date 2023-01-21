import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import whiteLogo from "../img/tuAseguranzaWhite.png";
import logo from "../img/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="s-pn__wrapper">
          <div className="social">
            <a href="https://www.facebook.com/Tu.Aseguranza" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="phone">
            <a href="tel:1205-382-1301" className="purple">
              1(205)382-1301
            </a>
          </div>
        </div>
        <div className="footer__img">
          <img src={logo} alt="Tu Aseguranza Logo" loading="lazy" />
        </div>
        <div className="footer_info">
          <div className="address">
            <p>123 Main Street Pelham , AL 35204</p>
          </div>
          <div className="footer__contact black">
            <p>mon-fri : 8-6 mon-fri : 10-6</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
