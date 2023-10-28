import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import googleIcon from "@assets/googleIcon.png";

function googleBtn() {
    return (
        <button className="btn"> {/*to="/SignIn">*/}
            <img src={googleIcon} className="small-icon" alt="gI" />
            Sign Up with Google
        </button>
    );
}

export default googleBtn;
