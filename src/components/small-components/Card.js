import React from "react";
import "../componentsCSS/Card.css";
import Navbar from "./Navbar";
function Card() {
  return (
    <>

      <div className="card">
      <div className="pro-icon"></div>
        <div className="inner-box">
          <p className= "card-user-name">Mr. Advocate</p>
          <div className="view-button">View</div>


        </div>
      </div>
    </>
  );
}

export default Card;
