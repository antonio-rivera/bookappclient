import React from "react";
import "../styles/Header.scss";
import logo from "../assets/BookSloth Logo-02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="Header">
      <div className="upper-row">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="links">
          <a href="https://www.facebook.com/booksloth">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a href="https://www.instagram.com/bookslothapp/">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://twitter.com/bookslothapp">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
      </div>
      <div className="title-container">
        <span className="title">Community</span>
      </div>
    </div>
  );
}
