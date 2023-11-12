import React from "react";
import {NavLink} from "react-router-dom";
import "../componentsCSS/Error404.css"
function Error404() {
  return (
    <>
      <div className = "w-screen h-screen flex justify-center flex-col items-center gap-10">
        <h1 className = " font-bold block text-5xl ">Error 404 not found !</h1>
        <p className = "text-2xl font-bold">The page your requested, cannot be found. </p>
        <NavLink to = "/" className = "border-black rounded-full w-1/6 h-10 font-bold text-lg bg-blue-200 border flex justify-center items-center" >Go back</NavLink>
      </div>
    </>
  );
}

export default Error404;
