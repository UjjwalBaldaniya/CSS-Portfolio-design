import React from "react";
import portOne from "../assets/portfolio/port-1.svg";
import portTwo from "../assets/portfolio/port-2.svg";
import portThree from "../assets/portfolio/port-3.svg";
import portFour from "../assets/portfolio/port-4.svg";
import portFive from "../assets/portfolio/port-5.svg";
import portSix from "../assets/portfolio/port-6.svg";
import portSeven from "../assets/portfolio/port-7.svg";
import portEight from "../assets/portfolio/port-8.png";

const Portfolio = () => {
  const portImages = [
    portSeven,
    portTwo,
    portThree,
    portFour,
    portFive,
    portSix,
    portOne,
    portEight,
  ];

  return (
    <div className="partner-section my-5">
      <div className="container">
        <div className="mx-auto text-center" style={{ maxWidth: "411px" }}>
          <p className="fw-bold" style={{ color: "#74C69D" }}>
            WORKS
          </p>
          <h1 className="fw-bold font-crimson-text">Portfolio</h1>
          <h5 className="fw-normal mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h5>
        </div>
        <div class="row gy-5 py-5">
          {portImages.map((image, index) => (
            <div
              className="col-12 col-md-6 d-flex justify-content-center"
              key={index}
            >
              <img src={image} alt="port-1" className="img-fluid" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-dark px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
