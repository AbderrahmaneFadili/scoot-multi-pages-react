import React from "react";
import "./Button.css";

const Button = ({ type, children, className, onClick }) => {
  return (
    <a
      onClick={onClick}
      href="/#"
      className={`btn ${
        type === "primary" ? "btn--primary" : "btn--secondary"
      } ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
