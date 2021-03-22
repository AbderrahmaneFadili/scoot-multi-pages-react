import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-container">
          <a href="#">
            <img src="./assets/logo-white.svg" alt="" />
          </a>
        </div>

        <ul className="footer__menu">
          <li className="footer__menu-item">
            <Link to="/" className="footer__menu-link">
              About
            </Link>
          </li>
          <li className="footer__menu-item">
            <Link to="/location" className="footer__menu-link">
              Location
            </Link>
          </li>
          <li className="footer__menu-item">
            <Link to="/careers" className="footer__menu-link">
              Careers
            </Link>
          </li>
        </ul>

        <ul className="socials">
          <li>
            <a href="#">
              <img src="./assets/icons/facebook.svg" alt="" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="./assets/icons/twitter.svg" alt="" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="./assets/icons/instagram.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
