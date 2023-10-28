import React from "react";
import NSLogo from "../../photo/NSLogo.png";
import googleIcon from "../../photo/googleIcon.png";
import "../componentsCSS/LandingPage.css";
import { Link } from "react-router-dom";
import Card from "../Card";
function LandingPage() {
  return (
    <>
      <div className="container-LandingPage">
        <img src={NSLogo} alt="Logo" className="logo" />
        <h1 className="title-landingpage">Nyaye Sathi</h1>
        <h3 className="tagline">One Stop Solution to all your Legal Needs</h3>
        <div className="btns">
        <Link className="signIn_btn" to="/SignIn">
            Sign In
          </Link>
          <h1 className = "separating-bar"> |</h1>
          <Link className="signUp_btn" to="/SignUp">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
