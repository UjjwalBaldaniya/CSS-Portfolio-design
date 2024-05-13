import React from "react";
import airbnb from "../../assets/home/airbnb.svg";
import google from "../../assets/home/google.svg";
import microsoft from "../../assets/home/microsoft.svg";
import facebook from "../../assets/home/facebook.svg";
import sopity from "../../assets/home/sopify.svg";

const Partner = () => {
  return (
    <div className="partner-section my-5">
      <div className="container">
        <div className="mx-auto text-center" style={{ maxWidth: "411px" }}>
          <p className="fw-bold" style={{ color: "#74C69D" }}>
            PARTNERS
          </p>
          <h1 className="fw-bold font-crimson-text">Lorem Ipsum Dolor</h1>
          <h5 className="fw-normal mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h5>
        </div>
        <div className="d-flex flex-wrap gap-5 justify-content-center justify-content-lg-between my-5">
          <img src={google} alt="google" />
          <img src={microsoft} alt="microsoft" />
          <img src={airbnb} alt="airbnb" />
          <img src={facebook} alt="facebook" />
          <img src={sopity} alt="sopity" />
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

export default Partner;
