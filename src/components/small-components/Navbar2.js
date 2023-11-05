import React, { useState } from "react";
import NSLogo from "../../photo/NSLogo.png";
// import "../componentsCSS/Navbar.css";
import LandingPage from "../Pages/LandingPage";
import Title from "./Title";

function Navbar({props}) {
  return (
    <>
      <nav className={`container-nav-${props.mode}`}>
        <div className="nav-logo-title">
          {/* <div className={`nav-logo-${props.mode}`}></div> */}
          <h1 className="nav-title">Nyaye Sathi</h1>
          
        </div>
      

        

        <ul className="list">
          <li id={`item-${props.mode}`} to="/LandingPage">
            Home
          </li>
          <li id={`item-${props.mode}`} to="/SignUp">
            About
          </li>
          <li id={`item-${props.mode}`} to="/SignIn">
            Contact
          </li>
          <li id={`item-${props.mode}`} to="/user-profile">
            Profile
          </li>
          <div className="profile-icon">
            <img src="src/photo/NSLogo.png" alt="photo" />
          </div>
        </ul>
      </nav>
      <div className={`filter-${props.OnOff}`}>
        <button className={`filter_button-${props.OnOff}`}>Filters/Sort</button>
      </div>
    </>
  );
}

export default Navbar;

Navbar.defaultProps = {
  mode: "transparent",
  OnOff: "on",
};
