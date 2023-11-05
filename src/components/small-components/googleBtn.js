import React from 'react';
import googleIcon from "../photo/googleIcon.png";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function googleBtn() {
  return (
    <button className="btn" to ="/SignIn">
          <img src={googleIcon} className="small-icon" alt="gI" />
          Sign Up with Google
        </button>
  )
}

export default googleBtn