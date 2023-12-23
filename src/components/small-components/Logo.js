import React from 'react'

import NSLogo from "../../assests/NSLogo.png";

import "../componentsCSS/Logo.css";

function Logo(props) {
  return (
    <img src={NSLogo} alt="Logo" className= {props.size} />
  );
}

export default Logo;




