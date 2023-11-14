import React from "react";
import "../componentsCSS/CommunityForumsPage.css";
import Navbar from "../small-components/Navbar";
import SearchBar from "../small-components/SearchBar";
import SidebarForums from "../small-components/SidebarForums";
import Sidebar from "../small-components/Sidebar";
function CommunityForumsPage() {
  return (
    <>
      <Navbar />
      <div className=" community border-blue-900 border my-1/10">
        <Sidebar mode="dark" />
        <div className = "w-max  border border-black flex flex-col ">
          <div className="searchBar">
            <p>Search here</p>
          </div>
          <div>
            Question 1
          </div>
        </div>
        <button className="askBtn">Ask a question</button>
      </div>
    </>
  );
}

export default CommunityForumsPage;
