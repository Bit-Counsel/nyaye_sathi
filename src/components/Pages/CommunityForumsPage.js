import React from "react";
import "../componentsCSS/CommunityForumsPage.css";
import Navbar from "../small-components/Navbar";
import SearchBar from "../small-components/SearchBar";
import SidebarForums from "../small-components/SidebarForums";
function CommunityForumsPage() {
  return (
    <>
      <Navbar />
      <div className=" border-black w-full h-screen border flex">
        <div className="1/3">
          <SidebarForums />
        </div>
        <div className=" w-max border-3 border-green flex ">
          <SearchBar />
          <button className="border-black border w-4/5  ">hello</button>
        </div>
      </div>
    </>
  );
}

export default CommunityForumsPage;
