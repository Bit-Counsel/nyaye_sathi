import React from "react";
import "./componentsCSS/Card.css";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
function Card() {
  return (
    <>

      <div className="card">
      <div className="pro-icon"></div>
        <div className="inner-box">
          <p className= "card-user-name">Mr. Advocate</p>
          <div className="view-button"><Link  to = "/profile-page">
            View
          </Link></div>


        </div>
      </div>
    </>
  );
}

export default Card;
