import React from "react";
import group from "../../assets/home/Group.svg";

const Headers = () => {
  return (
    <div className="header-section" style={{ backgroundColor: "#74C69D" }}>
      <div className="container py-4">
        <div className="row pb-3 pb-md-5 flex-column-reverse flex-md-row gy-4 ">
          <div className="col-md-5 text-white d-flex flex-column align-items-start justify-content-center pe-5 ">
            <p className="fw-bold">WELCOME</p>
            <h1 className="fw-bold font-crimson-text">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="fw-lighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <button type="button" class="btn btn-light px-5">
              Explore
            </button>
          </div>
          <div className="col-md-7 d-flex justify-content-end align-items-center">
            <img src={group} alt="hero-img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
