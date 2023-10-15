import React from "react";
import NSLogo from "../photo/NSLogo.png";
import googleIcon from "../photo/googleIcon.png";
import "./componentsCSS/LandingPage.css";
import {Link} from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div className="container">
        <img src={NSLogo} alt="Logo" className="logo" />
        <h1>Nyaye Sathi</h1>
        <h3>One Stop Solution to all your Legal Needs</h3>
        <div className="signUp_btn"><Link to="/SignUp">Sign Up</Link></div>
      </div>
    </>
  );
}

export default LandingPage;
