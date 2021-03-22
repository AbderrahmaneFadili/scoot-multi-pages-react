import React from "react";
import Header from "../../components/Header/Header";
import CareersHero from "./CareersHero";
import JoinUs from "./JoinUs";
import JobPositions from "./JobPositions";
import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";

const Careers = () => {
  return (
    <main>
      <Header title="Careers" />
      <CareersHero />
      <JoinUs />
      <JobPositions />
      <SignUp />
      <Footer />
    </main>
  );
};

export default Careers;
