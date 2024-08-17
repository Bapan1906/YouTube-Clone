import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile_icon from "../../assets/tom.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      {" "}
      {/* Navigation bar container */}
      <div className="nav-lest flex-div">
        {" "}
        {/* Left section of the navigation bar */}
        <img
          className="menu_icon" /* Menu icon for toggling the sidebar */
          onClick={() =>
            setSidebar((prev) => (prev === false ? true : false))
          } /* Toggle sidebar visibility on click */
          src={menu_icon} /* Source of the menu icon image */
          alt="" /* Alternative text for the image */
        />
        <Link to="/">
          {" "}
          {/* Link to the home page */}
          <img className="logo" src={logo} alt="" /> {/* Logo image */}
        </Link>
      </div>
      <div className="nav-middle flex-div">
        {" "}
        {/* Middle section of the navigation bar */}
        <div className="search-box flex-div">
          {" "}
          {/* Search box container */}
          <input type="text" placeholder="Search" /> {/* Search input field */}
          <img src={search_icon} alt="" /> {/* Search icon */}
        </div>
      </div>
      <div className="nav-right flex-div">
        {" "}
        {/* Right section of the navigation bar */}
        <img src={upload_icon} alt="" /> {/* Upload icon */}
        <img src={more_icon} alt="" /> {/* More options icon */}
        <img src={notification} alt="" /> {/* Notification icon */}
        <img src={profile_icon} className="user-icon" alt="" />{" "}
        {/* User profile icon */}
      </div>
    </nav>
  );
};

export default Navbar;
