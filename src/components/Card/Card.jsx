import React from "react";
import numeral from "numeral";
import "./Card.css";

const Card = ({ pictureSrc, number, title, description }) => {
  const cardNumber = numeral(number).format("00");
  return (
    <div className="card">
      <div className="card__picture">
        <img src={pictureSrc} alt="Card_picture" />

        <div className="card__number__container">
          <span className="card__number">{`${cardNumber}`}</span>
        </div>
      </div>

      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
