import React from "react";
import Card from "../../components/Card/Card";
import "./OurValues.css";

const ouValuesCards = [
  {
    title: "Our tech",
    description: `We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!`,
    src: "./assets/images/our-tech.jpg",
  },
  {
    title: "Our integrity",
    description: `We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.`,
    src: "./assets/images/our-integrity.jpg",
  },
  {
    title: "Our community",
    description: `We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.`,
    src: "./assets/images/our-community.jpg",
  },
];

const OurValues = () => {
  return (
    <section className="our-values">
      <h1 className="our-values__title">Our Values</h1>
      <div className="our-values__cards">
        {ouValuesCards.map((card, i) => (
          <Card
            key={i.toString()}
            title={card.title}
            description={card.description}
            pictureSrc={card.src}
            number={(i = i + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurValues;
