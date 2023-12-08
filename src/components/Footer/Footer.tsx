import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import "./Footer.css";

import mernLogo from "utils/icons/MERN-logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="made-with">
          Made with <FaReact className="icon" /> by Kartik Katiyar
        </div>
        <br></br>
        <div className="social-icons">
          <a
            href="mailto:katiyarkartik0@gmail.com@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kartik-katiyar-80b749200/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com/katiyarkartik0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://twitter.com/katiyarkartik0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://github.com/katiyarkartik0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
