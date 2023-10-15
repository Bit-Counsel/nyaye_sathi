import React from "react";
import "./componentsCSS/SignUp.css";
import Logo from "./Logo";
import Title from "./Title";
import InputField from "./InputField";
import InputText from "./InputText";
import googleIcon from "../photo/googleIcon.png";
function SignUp() {
  return (
    <>
      <div className="container">
        <Logo />
        <h1 className="title">Nyaye Sathi</h1>

        <div className="input_fields">
          <div className="box" id="box1">First Name</div>
          <div className="box" id="box2">Last Name</div>
          <div className="box" id="box3">Phone</div>
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          <div className="box" id="box4">Email</div>
          <div className="box" id="box5">Aadhar Number</div>
          <div className="box" id="box6">Password</div>
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
          <input type="text" className="input_box" />
        </div>
        <div className="btn"><img src={googleIcon} className="small-icon" alt="gI" />Sign Up with Google</div>
      </div>
    </>
  );
}

export default SignUp;
