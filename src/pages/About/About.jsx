import React from "react";
import Header from "../../components/Header/Header";
import Features from "./Features";
import OurValues from "./OurValues";
import Faqs from "./Faqs";
import SignUp from "../../components/SignUp/SignUp";
const About = () => {
  return (
    <main>
      <Header title="About" />
      <Features />
      <OurValues />
      <Faqs />
      <SignUp />
    </main>
  );
};

export default About;
