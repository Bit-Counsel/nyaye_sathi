import React from "react";
import "./componentsCSS/Card.css";
import Navbar from "./Navbar"
import Card from "./Card"
function Gridbox() {
  return (
    <>

      <div className="grids">
        <div className="card">
          <div className="inner-box">
            box
          </div>
        </div>
        <div className="card">box</div>
        <div className="card">box</div>
        <div className="card">box</div>
        <div className="card">box</div>
        <div className="card">box</div>
        <div className="card">box</div>
        <div className="card">box</div>
        <div className="card">box</div>
      </div>
    </>
  );
}

export default Gridbox;
