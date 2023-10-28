import React, { useState } from "react";

import LandingPage from "@pages/LandingPage";

import Title from "@components/Title";
import SearchBar from "@components/SearchBar";

import NSLogo from "@assets/NSLogo.png";

import "@css/Navbar.css";

function Navbar(props) {
    return (
        <>
            <nav className={`container-nav-${props.mode}`}>
                <div className="nav-logo-title">
                    <div className={`nav-logo-${props.mode}`}></div>
                    <h1 className="nav-title">Nyaye Sathi</h1>
                </div>

                {/* <div className="searchBar"></div> */}

                <ul className="list">
                    <li id={`item-${props.mode}`}> {/*to="/LandingPage">*/}
                        Home
                    </li>
                    <li id={`item-${props.mode}`}> {/*to="/SignUp">*/}
                        About
                    </li>
                    <li id={`item-${props.mode}`}> {/*to="/SignIn">*/}
                        Contact
                    </li>
                    <li id={`item-${props.mode}`}> {/*to="/user-profile">*/}
                        Profile
                    </li>
                    <div className="profile-icon">
                        <img src="../../assets/NSLogo.png" alt="photo" />
                    </div>
                </ul>
            </nav>
            <div className={`filter-${props.OnOff}`}>
                <button className={`filter_button-${props.OnOff}`}>
                    Filters/Sort
                </button>
            </div>
        </>
    );
}

export default Navbar;

Navbar.defaultProps = {
    mode: "transparent",
    OnOff: "on"
};
