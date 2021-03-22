import React from "react";
import "./CareersHero.css";
import Button from "../../components/Button/Button";

const CareersHero = () => {
  return (
    <section className="careers-hero">
      <div className="careers-hero__contianer">
        <div className="careers-hero__picture">
          <img src="./assets/images/join-us.jpg" alt="" />
        </div>

        <div className="careers-hero__content">
          <h1 className="carrers-hero__question">Care to join our mission?</h1>

          <p className="carrers-hero__answer">
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </p>

          <Button type="primary">Saya Hello</Button>
        </div>
      </div>

      <div className="careers-hero__patterns">
        <img
          className="careers-hero__patterns__arrow"
          src="./assets/patterns/left-downward-arrow.svg"
          alt="Arrow"
        />

        <img
          className="careers-hero__patterns__circle"
          src="./assets/patterns/circle.svg"
          alt="Circle"
        />
      </div>
    </section>
  );
};

export default CareersHero;
