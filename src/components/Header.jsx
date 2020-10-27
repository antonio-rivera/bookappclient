import React from "react";
import "../styles/Header.scss";
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
        <div className="links">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
      </div>
      <div className="title-container">
        <span className="title">Blog</span>
      </div>
    </div>
  );
}
