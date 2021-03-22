import React from "react";
import Header from "../../components/Header/Header";
import WordMap from "./WordMap";
import CityListing from "./CityListing";
import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";

const Location = () => {
  return (
    <main>
      <Header title="Location" />
      <WordMap />
      <CityListing />
      <SignUp />
      <Footer />
    </main>
  );
};

export default Location;
