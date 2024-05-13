import React from "react";
import social from "../../assets/home/social.svg";

const Footer = () => {
  return (
    <div className="footer-section" style={{ backgroundColor: "#74C69D" }}>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-3 justify-content-md-between align-items-center py-4 py-md-4">
          <div>
            <img src={social} alt="social" />
          </div>
          <div className="text-white">
            <h5 className="mb-0 fw-normal">
              © Start, 2022. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
