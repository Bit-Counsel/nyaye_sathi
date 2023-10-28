import React from "react";

import NSLogo from "@app/assets/NSLogo.png";
import googleIcon from "@assets/googleIcon.png";

import "@css/Logo.css";

function Logo(props) {
    return <img src={NSLogo} alt="Logo" className={props.size} />;
}

export default Logo;
