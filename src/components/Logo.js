import React from 'react'
import NSLogo from "../photo/NSLogo.png";
// import googleIcon from "../photo/googleIcon.png";
import "./componentsCSS/Logo.css";

function Logo() {
  return (
    <img src={NSLogo} alt="Logo" className="logo" />
  );
}

export default Logo;