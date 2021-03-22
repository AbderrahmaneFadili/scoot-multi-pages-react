import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="about-features">
      <div className="about-features__container">
        <article className="feature">
          <div className="feature__picture">
            <img src="./assets/images/digital-era.jpg" alt="Digital" />
          </div>

          <div className="feature__content">
            <h2 className="feature__content__title">
              Mobility for the digital era
            </h2>
            <p className="feature__content__text">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
        </article>

        <article className="feature">
          <div className="feature__picture">
            <img src="./assets/images/better-living.jpg" alt="Better Living" />
          </div>

          <div className="feature__content">
            <h2 className="feature__content__title">Better urban living</h2>
            <p className="feature__content__text">
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </article>
      </div>

      <div className="patterns">
        <div className="arrow-pattern__left">
          <img src="./assets/patterns/left-upward-arrow.svg" alt="left" />
        </div>
        <div className="circle-pattern__left">
          <img src="./assets/patterns/circle.svg" alt="left" />
        </div>

        <div className="arrow-pattern__right">
          <img src="./assets/patterns/right-arrow.svg" alt="right" />
        </div>

        <div className="circle-pattern__right">
          <img src="./assets/patterns/circle.svg" alt="right" />
        </div>
      </div>
    </section>
  );
};

export default Features;
