import React from "react";

import Navbar from "@components/Navbar";

import "@css/Card.css";

function Card() {
    return (
        <>
            <div className="card">
                <div className="pro-icon"></div>
                <div className="inner-box">
                    <p className="card-user-name">Mr. Advocate</p>
                    <div className="view-button">View</div>
                </div>
            </div>
        </>
    );
}

export default Card;
