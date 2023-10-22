import React from 'react';
import NSLogo from "./Logo"
import "./componentsCSS/Navbar.css";
import {Link} from 'react-router-dom';
import LandingPage from "./LandingPage"
function Navbar() {
  return (
    <>
    <nav className ="" >
      <div  className = 'Logo'><Link><img src="../photo/NSLogo.png" alt="" /></Link></div>
      <ul className = "list">
        <Link id= "item" to="/LandingPage">Home</Link>
        <Link id= "item" to="/SignUp">About</Link>
        <Link id= "item" to="/SignIn">Contact</Link>
        <Link id= "item" to="/">Profile</Link>
        <div className ="profile-icon"><img src="../photo/NSLogo.png" alt="photo" /></div>
      </ul>
    </nav>
    <div className="filters"> <button className="filter-button">Filters/Sort</button></div>
    </>
  )
}

export default Navbar;