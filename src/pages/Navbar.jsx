import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/home/NavLogo.svg";

const Navbar = () => {
  return (
    <div
      className="navbar-container py-4"
      style={{ backgroundColor: "#74C69D" }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="d-flex gap-3">
              <img src={navLogo} alt="nav-logo" />
              <h1 className="text-white mb-0">Start</h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white fs-5 mx-3"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link text-white fs-5" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link text-white fs-5" to="/service">
                    Services
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link text-white fs-5" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
