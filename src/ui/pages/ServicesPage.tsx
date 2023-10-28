import React from "react";

import Navbar from "@components/Navbar";
import Card from "@components/Card";
import Gridbox from "@components/Gridbox";

import "@css/ServicesPage.css";

function ServicesPage() {
    return (
        <>
            <Navbar />
            <h1 className="ques">Whom can we connect with you today?</h1>
            <Gridbox />
            <div className="container-ServicesPage">
                <div className="services"></div>
            </div>
        </>
    );
}

export default ServicesPage;
