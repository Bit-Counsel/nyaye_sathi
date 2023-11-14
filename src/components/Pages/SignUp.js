import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../componentsCSS/SignUp.css";

import SignIn from "./SignIn";

import Logo from "../small-components/Logo";
import Title from "../small-components/Title";
import InputField from "../small-components/InputField";
import InputText from "../small-components/InputText";

import googleIcon from "../../photo/googleIcon.png";

function SignUp() {
  return (
    <>
      <div className="container-signUp">
        <Logo size="large-logo" />
        <h1 className="title-signUp">
          <Link to="/LandingPage"> Nyaye Sathi</Link>
        </h1>

        <div className="input_fields">
          <InputText input_text="First Name" className="input_text_css" />
          <InputText input_text="Last Name" className="input_text_css" />
          <InputText input_text="Phone" className="input_text_css" />{" "}
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          <InputText
            input_text="Email"
            className="
          input_text_css"
          />
          <InputText input_text="Aadhar Number" className="input_text_css" />
          <InputText input_text="Password" className="input_text_css" />
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
        </div>
        <Link className="btn" to ="/SignIn">
          <img src={googleIcon} className="small-icon" alt="gI" />
          Sign Up with Google
        </Link>
      </div>
    </>
  );
}

export default SignUp;
