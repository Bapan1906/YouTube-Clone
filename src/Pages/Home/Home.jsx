import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0); // State to manage the selected category

  return (
    <>
      <Sidebar
        isSidebarOpen={sidebar}
        category={category}
        setCategory={setCategory}
      />{" "}
      {/* Render Sidebar with props for sidebar state, selected category, and category setter */}
      <div className={`container ${sidebar ? "" : "largr-container"}`}>
        {" "}
        {/* Container class changes based on sidebar state */}
        <Feed category={category} />{" "}
        {/* Render Feed component with the current category */}
      </div>
    </>
  );
};

export default Home;
