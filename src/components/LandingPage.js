import React from "react";
import NSLogo from "../photo/NSLogo.png";
import googleIcon from "../photo/googleIcon.png";
import "./componentsCSS/LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="container">
        <img src={NSLogo} alt="Logo" className="logo" />
        <h1>Nyaye Sathi</h1>
        <h3>One Stop Solution to all your Legal Needs</h3>
        <div className="signUp_btn">Sign Up</div>
      </div>
    </>
  );
}

export default LandingPage;
