import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuOpen = () => setToggleMenu(true);

  const handleMenuClose = () => setToggleMenu(false);

  return (
    <nav className="navbar">
      {/* Menu Open */}
      <div className="navbar__open-menu" onClick={handleMenuOpen}>
        <img
          src="./assets/icons/hamburger.svg"
          alt="Menu"
          className="menu-icon"
        />
      </div>

      {/* Scoot Logo */}
      <Link to="/" className="navbar__logo">
        <img src="./assets/Logo.svg" alt="logo" className="scoot-logo" />
      </Link>

      {/* Navbar Container */}
      <div
        className="navbar__container"
        style={{ left: toggleMenu ? 0 : "-100%" }}
      >
        {/*  Close */}
        <div className="navbar__close-menu" onClick={handleMenuClose}>
          <img
            src="./assets/icons/close.svg"
            alt="Close"
            className="menu-close"
          />
        </div>
        {/* Menu List */}
        <ul className="navbar__menu-list">
          <li className="navbar__menu-item">
            <Link
              to="/"
              className="navbar__menu-link"
              onClick={handleMenuClose}
            >
              About
            </Link>
          </li>

          <li className="navbar__menu-item">
            <Link
              to="/location"
              className="navbar__menu-link"
              onClick={handleMenuClose}
            >
              Loaction
            </Link>
          </li>

          <li className="navbar__menu-item">
            <Link
              to="/careers"
              className="navbar__menu-link"
              onClick={handleMenuClose}
            >
              Careers
            </Link>
          </li>
        </ul>
        {/* Got to Bottom button */}

        <Button
          type="primary"
          className="navbar__button"
          onClick={handleMenuClose}
        >
          Get Scootin
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
