import React from "react";

import NSLogo from "@app/assets/NSLogo.png";
import googleIcon from "@assets/googleIcon.png";

import "@css/Logo.css";

interface IProps {
    size: string;
}

function Logo(props: IProps) {
    return <img src={NSLogo} alt="Logo" className={props.size} />;
}

export default Logo;
