import React from "react";
import "./componentsCSS/NewNavbar.css";
function NewNavbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
            <div className="nav-logo"></div>
            <div className="nav-title">Nyaye Sathi</div>
        </div>

        <div className="search-Bar">
            <div className="bar">Search here.</div>
        </div>


        <div className="nav-right"></div>
      </div>
    </>
  );
}

export default NewNavbar;
