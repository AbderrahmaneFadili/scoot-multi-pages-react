import React from "react";
import Button from "../../components/Button/Button";
import "./JobPositions.css";

const JobPositions = () => {
  return (
    <section className="job-positions">
      <div className="job-positions__container">
        <div className="job-positions__job">
          <div className="job-positions__job__content">
            <h3 className="job__title">General Manager</h3>

            <p className="job__position">Jakarta, Indonesia</p>
          </div>

          <Button type="primary">Apply</Button>
        </div>

        <div className="job-positions__job">
          <div className="job-positions__job__content">
            <h3 className="job__title">UI/UX Designer</h3>
            <p className="job__position">Yokohama, Japan</p>
          </div>

          <Button type="primary">Apply</Button>
        </div>

        <div className="job-positions__job">
          <div className="job-positions__job__content">
            <h3 className="job__title">Blog Content Copywriter</h3>
            <p className="job__position">New York, United States</p>
          </div>
          <Button type="primary">Apply</Button>
        </div>

        <div className="job-positions__job">
          <div className="job-positions__job__content">
            <h3 className="job__title">Graphic Designer</h3>
            <p className="job__position">New York, United States</p>
          </div>

          <Button type="primary">Apply</Button>
        </div>

        <div className="job-positions__job">
          <div className="job-positions__job__content">
            <h3 className="job__title">Fleet Supervisor</h3>
            <p className="job__position">Jakarta, Indonesia</p>
          </div>
          <Button type="primary">Apply</Button>
        </div>

        <div className="job-positions__job">
          <div className="job-positions__job__content">
            <h3 className="job__title">UX Analyst</h3>
            <p className="job__position">London, United Kingdom</p>
          </div>
          <Button type="primary">Apply</Button>
        </div>
      </div>
    </section>
  );
};

export default JobPositions;
