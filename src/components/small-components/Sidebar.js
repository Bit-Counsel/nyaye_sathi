import React from "react";
import "../componentsCSS/Sidebar.css";
import SidebarBtn from "./SidebarBtn";
function Sidebar() {
  return (
    <>
    <div className="sidebar-nav">
      <SidebarBtn BtnText = "Home"/>
      <h2 className = "public" >PUBLIC</h2>
      <SidebarBtn BtnText = "QUESTIONS"/>
      <SidebarBtn BtnText = "COMMUNITY"/>
      <SidebarBtn BtnText = "TAGS"/>
    </div>
    </>
  );
}

export default Sidebar;
