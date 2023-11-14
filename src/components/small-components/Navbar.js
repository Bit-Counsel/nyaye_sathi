import React from "react";
import "../componentsCSS/Navbar.css";
import NSLogo from "../../photo/NSLogo.png";
import NSLogoWhite from "../../photo/NSLogoWhite.png";
import {Link} from "react-router-dom"
function Navbar(props) {
  return (
    <>
      <div className={` fixed nav-container-${props.mode}`}>
        <div className={`nav-left-${props.mode}`}>
          <Link to= "/" className={`nav-logo-${props.mode}`}>
            {
              props.mode == 'transparent'? (
                <img src={NSLogo} alt="" />
              ) : (
                <img src={NSLogoWhite} alt="" />
              )
            }
            
          </Link>
          
          <Link to = "/" className={`nav-title-${props.mode}`}>Nyaye Sathi</Link>
          
        </div>

        <div className={`search-Bar-${props.mode}`}>
          <div className={`bar-${props.mode}`}>Search here.</div>
        </div>

        <div className={`nav-right-${props.mode}`}>
          <ul className={`list-${props.mode}`}>
            <button id={`item item-${props.active}`}>
              <Link  to="/ServicesPage">Home</Link>
            </button>
            <button id={`item `}><Link to = "/About"> About</Link></button>
            <button id={`item `}><Link to = "/CommunityForumsPage"> CmtyFrms </Link></button>
            <button id={`item `}><Link to = "/user-profile"> Profile</Link></button>
          </ul>
          <div className="profile-icon">
            <img src="" alt="photo" />
          </div>
        </div>
      </div>

      {/* filters button */}
      <div className={`filter-${props.OnOff}`}>
        <button className={`filter_button-${props.OnOff}`}>Filters/Sort</button>
      </div>
    </>
  );
}

export default Navbar;

Navbar.defaultProps = {
  mode: "dark",
  OnOff: "Off",
  active: "active",
};
