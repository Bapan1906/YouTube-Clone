import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobile from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ isSidebarOpen, category, setCategory }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "small-Sidebar"}`}>
      {/* Shortcut links section */}
      <div className="shortcut-links">
        {/* Home link */}
        <div
          className={`side-links ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="Home" /> <p>Home</p>
        </div>

        {/* Gaming link */}
        <div
          className={`side-links ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="Gaming" /> <p>Gaming</p>
        </div>

        {/* Automobiles link */}
        <div
          className={`side-links ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobile} alt="Automobiles" /> <p>Automobiles</p>
        </div>

        {/* Sports link */}
        <div
          className={`side-links ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="Sports" /> <p>Sports</p>
        </div>

        {/* Entertainment link */}
        <div
          className={`side-links ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="Entertainment" /> <p>Entertainment</p>
        </div>

        {/* Tech link */}
        <div
          className={`side-links ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="Tech" /> <p>Tech</p>
        </div>

        {/* Music link */}
        <div
          className={`side-links ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="Music" /> <p>Music</p>
        </div>

        {/* Blogs link */}
        <div
          className={`side-links ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="Blogs" /> <p>Blogs</p>
        </div>

        {/* News link */}
        <div
          className={`side-links ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="News" /> <p>News</p>
        </div>
        <hr />
      </div>

      {/* Subscribed channels section */}
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        {/* Subscribed channel list */}
        <div className="side-links">
          <img src={jack} alt="PewDiePie" /> <p>PewDiePie</p>
        </div>

        <div className="side-links">
          <img src={simon} alt="T-Series" /> <p>T-Series</p>
        </div>

        <div className="side-links">
          <img src={tom} alt="MrBeast" /> <p>MrBeast</p>
        </div>

        <div className="side-links">
          <img src={megan} alt="Cocomelon" /> <p>Cocomelon</p>
        </div>

        <div className="side-links">
          <img src={cameron} alt="5-Minute Crafts" /> <p>5-Minute Crafts</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
