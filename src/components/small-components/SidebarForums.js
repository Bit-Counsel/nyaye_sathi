import React  from "react";
import "../componentsCSS/SidebarForums.css";
import SidebarBtn from "./SidebarBtn";
function SidebarForums() {
  return (
    <>
      <div className="sidebar-side">
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
