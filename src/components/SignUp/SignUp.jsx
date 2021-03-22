import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <section className="signUp">
      <div className="signUp__container">
        <div className="signUp__left">
          <h1 className="signUp__title">Sign up and Scoot off today</h1>
        </div>

        <div className="signUp__right">
          <a href="#">
            <img src="./assets/icons/app-store.svg" alt="appstore" />
          </a>

          <a href="#">
            <img src="./assets/icons/google-play.svg" alt="playstore" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
