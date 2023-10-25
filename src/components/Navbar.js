import React from "react";
import NSLogo from "../photo/NSLogo.png";
import "./componentsCSS/Navbar.css";
import { Link } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Title from "./Title";

function Navbar() {
  return (
    <>
      <nav className="container-nav">
        <div className="nav-logo-title">
        <div className="nav-logo"></div>
        <h1 className="nav-title">Nyaye Sathi</h1>
        </div>
        <ul className="list">
          <Link id="item" to="/LandingPage">
            Home
          </Link>
          <Link id="item" to="/SignUp">
            About
          </Link>
          <Link id="item" to="/SignIn">
            Contact
          </Link>
          <Link id="item" to="/user-profile">
            Profile
          </Link>
          <div className="profile-icon">
            <img src="src/photo/NSLogo.png" alt="photo" />
          </div>
        </ul>
      </nav>
      <div className="filters">
        {" "}
        <button className="filter-button">Filters/Sort</button>
      </div>
    </>
  );
}

export default Navbar;
