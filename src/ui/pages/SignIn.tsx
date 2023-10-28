import React from "react";
import { Link } from "react-router-dom";

import Logo from "@components/Logo";
import Title from "@components/Title";
import InputField from "@components/InputField";
import InputText from "@components/InputText";

import googleIcon from "@assets/googleIcon.png";

import "@css/SignIn.css";

function SignIn() {
    return (
        <>
            <div className="container-signIn">
                <Logo size="large-logo" />
                <h1 className="title-signIn">Nyaye Sathi</h1>

                <div className="input_fields-SignIn">
                    <InputText input_text="Phone" className="input_text_css" />{" "}
                    <input type="text" className="input_box" id="phone" />
                    <InputText
                        input_text="Password"
                        className="input_text_css"
                    />
                    <input type="text" className="input_box" id="password" />
                </div>

                <Link className="btn" to="/ServicesPage">
                    {" "}
                    <img src={googleIcon} className="small-icon" alt="gI" />
                    Sign Up with Google
                </Link>
            </div>
        </>
    );
}

export default SignIn;
