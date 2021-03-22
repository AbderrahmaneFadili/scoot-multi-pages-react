import React from "react";
import Header from "../../components/Header/Header";
import WordMap from "./WordMap";
import CityListing from "./CityListing";
const Location = () => {
  return (
    <main>
      <Header title="Location" />
      <WordMap />
      <CityListing />
    </main>
  );
};

export default Location;
