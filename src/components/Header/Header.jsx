import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">{title}</h1>
      <div className="main-header__circles">
        <img src="./assets/patterns/white-circles.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
