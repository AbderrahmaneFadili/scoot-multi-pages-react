import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">{title}</h1>
    </header>
  );
};

export default Header;
