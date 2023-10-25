import React from "react";
import "../componentsCSS/SignIn.css";
import Logo from "../Logo";
import Title from "../Title";
import InputField from "../InputField";
import InputText from "../InputText";
import googleIcon from "../../photo/googleIcon.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function SignIn() {
  return (
    <>
      <div className="container-signIn">
        <Logo size="large-logo" />
        <h1 className="title-signIn">
          <Link to="/LandingPage"> Nyaye Sathi</Link>
        </h1>

        <div className="input_fields-SignIn">
          <InputText input_text="Phone" className="input_text_css" />{" "}
          <input type="text" className="input_box" id="phone" />
          <InputText input_text="Password" className="input_text_css" />
          <input type="text" className="input_box" id="password" />

        </div>

        <Link className="btn" to="/SignIn">
          <img src={googleIcon} className="small-icon" alt="gI" />
          Sign Up with Google
        </Link>
      </div>
    </>
  );
}

export default SignIn;
