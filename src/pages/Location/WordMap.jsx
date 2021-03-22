import React from "react";
import "./WordMap.css";

const WordMap = () => {
  return (
    <section className="word-map">
      <div className="wordl-map__container">
        <div className="map"></div>
      </div>

      <ul className="locations">
        <li>
          <h3>New York</h3>
        </li>
        <li>
          <h3>London</h3>
        </li>
        <li>
          <h3>Jakarta</h3>
        </li>
        <li>
          <h3>Yokohama</h3>
        </li>
      </ul>
    </section>
  );
};

export default WordMap;
