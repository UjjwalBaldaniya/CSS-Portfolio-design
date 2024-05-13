import React from "react";
import middleOne from "../../assets/home/middle-1.svg";
import middleTwo from "../../assets/home/middle-2.svg";

const Middle = () => {
  return (
    <div className="middle-section">
      <div className="container">
        <div className="row flex-column flex-md-row gap-4 gap-md-0">
          <div className="col-md-6">
            <img src={middleOne} alt="middle-one" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
            <div className="ms-md-5">
              <h1 className="font-crimson-text fw-bold">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <button type="button" class="btn btn-dark px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="row flex-column flex-md-row gap-4 gap-md-0 my-5">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
            <div className="ms-md-5">
              <h1 className="font-crimson-text fw-bold">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <button type="button" class="btn btn-dark px-4">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={middleTwo} alt="middle-one" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
