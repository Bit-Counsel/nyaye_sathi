import React from 'react';
import googleIcon from "../photo/googleIcon.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function googleBtn() {
  return (
    <Link className="btn" to ="/SignIn">
          <img src={googleIcon} className="small-icon" alt="gI" />
          Sign Up with Google
        </Link>
  )
}

export default googleBtn