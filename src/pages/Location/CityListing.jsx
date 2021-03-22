import React from "react";
import "./CityListing.css";
import Button from "../../components/Button/Button";

const CityListing = () => {
  return (
    <section className="city-listing">
      <div className="city-listing__container">
        <h1 className="question">Your City Not Listed?</h1>
        <p className="answer">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button className="message-us__btn" type="primary">
          Message Us
        </Button>
      </div>
    </section>
  );
};

export default CityListing;
