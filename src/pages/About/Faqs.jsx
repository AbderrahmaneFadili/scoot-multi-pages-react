import React, { useState, useRef } from "react";
import "./Faqs.css";

const Faqs = () => {
  //Accordion 1
  const accordion1 = useRef(null);
  const accordion1Click = () => accordion1.current.classList.toggle("active");

  //Accordion 2
  const accordion2 = useRef(null);
  const accordion2Click = () => accordion2.current.classList.toggle("active");

  //Accordion 3
  const accordion3 = useRef(null);
  const accordion3Click = () => accordion3.current.classList.toggle("active");

  //Accordion 4
  const accordion4 = useRef(null);
  const accordion4Click = () => accordion4.current.classList.toggle("active");

  //Accordion 5
  const accordion5 = useRef(null);
  const accordion5Click = () => accordion5.current.classList.toggle("active");

  //Accordion 6
  const accordion6 = useRef(null);
  const accordion6Click = () => accordion6.current.classList.toggle("active");

  return (
    <section className="faqs">
      <h1 className="faqs__title">FAQs</h1>

      <div className="faqs__container">
        <div className="faqs__left">
          <h2 className="faqs__left-title">How it works</h2>
        </div>

        <div className="faqs__right">
          {/* Accordion */}
          <div className="accordion">
            <div className={`accordion__question`}>
              <h2 className="question">How do I download the app?</h2>
              <img
                onClick={accordion1Click}
                className="chevron"
                src="./assets/icons/chevron.svg"
                alt=""
              />
            </div>
            <div ref={accordion1} className={`accordion__answer`}>
              <p className="answer">
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            </div>

            <div className={`accordion__question`}>
              <h2 className="question">Can I find a nearby Scoots?</h2>
              <img
                onClick={accordion2Click}
                className="chevron"
                src="./assets/icons/chevron.svg"
                alt=""
              />
            </div>
            <div ref={accordion2} className={`accordion__answer`}>
              <p className="answer">
                Definitely! Simply open up the app and allow us to find your
                location while using it. We'll show you all of the closest
                Scoots and some extra useful information.
              </p>
            </div>

            <div className={`accordion__question`}>
              <h2 className="question">Do I need a license to ride?</h2>
              <img
                onClick={accordion3Click}
                className="chevron"
                src="./assets/icons/chevron.svg"
                alt=""
              />
            </div>
            <div ref={accordion3} className={`accordion__answer`}>
              <p className="answer">
                Yup! We provide information inside the app regarding local laws
                and the license you need to be able to ride our Scoots.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faqs__container">
        <div className="faqs__left">
          <h2 className="faqs__left-title">Safe driving</h2>
        </div>

        <div className="faqs__right">
          {/* Accordion */}
          <div className="accordion">
            <div className={`accordion__question`}>
              <h2 className="question">Should I wear a helmet?</h2>
              <img
                onClick={accordion4Click}
                className="chevron"
                src="./assets/icons/chevron.svg"
                alt=""
              />
            </div>
            <div ref={accordion4} className={`accordion__answer`}>
              <p className="answer">
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </p>
            </div>

            <div className={`accordion__question`}>
              <h2 className="question">How about the rules & regulations?</h2>
              <img
                onClick={accordion4Click}
                className="chevron"
                src="./assets/icons/chevron.svg"
                alt=""
              />
            </div>
            <div ref={accordion5} className={`accordion__answer`}>
              <p className="answer">
                Now is not the time to be a rule breaker. Be sure you're
                complying with all local laws and regulations. Also, just be a
                good human being. Be sure not to park your Scoot where it can
                block access to buildings or get in people's way.
              </p>
            </div>

            <div className={`accordion__question`}>
              <h2 className="question">What if I damage my Scoot?</h2>
              <img
                onClick={accordion6Click}
                className="chevron"
                src="./assets/icons/chevron.svg"
                alt=""
              />
            </div>
            <div ref={accordion6} className={`accordion__answer`}>
              <p className="answer">
                Be sure to read our terms and conditions carefully. Not the most
                fun job we know but we make it as clear as possible. There's an
                option to add insurance for each trip, or you can sign up for
                annual insurance if you're a regular Scooter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
