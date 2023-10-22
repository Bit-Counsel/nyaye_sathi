import React from "react";
import "./componentsCSS/SignUp.css";
import Logo from "./Logo";
import Title from "./Title";
import InputField from "./InputField";
import InputText from "./InputText";
import googleIcon from "../photo/googleIcon.png";
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
function SignUp() {
  return (
    <>
      <div className=" mx-auto container">
        <Logo size="large-logo" />
        <h1 className="title">
          <Link to="/LandingPage"> Nyaye Sathi</Link>
        </h1>

        <div className="input_fields">
          <InputText input_text="First Name" className="input_text_css" />
          <InputText input_text="Last Name" className="input_text_css" />
          <InputText input_text="Phone" className="input_text_css" />{" "}
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          {/* <div className="box" id="box4">Email</div> */}
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
