import React, { useState } from "react";
import "./componentsCSS/SidebarForums.css";
import Navbar from "./Navbar";
import SidebarBtn from "./SidebarBtn";
function SidebarForums() {
  return (
    <>
      <Navbar mode = "black" OnOff = "off"></Navbar>
      <div className="sidebar">
        <SidebarBtn BtnText="Home" />
        <div className="sidebarBox">
          <p className="sidebar-text">PUBLIC</p>
        </div>
        <SidebarBtn BtnText="Questions" />
        <SidebarBtn BtnText="Communities" BtnTextSize="textSmall" />
        <SidebarBtn BtnText="Tags" />
      </div>
    </>
  );
}

export default SidebarForums;
