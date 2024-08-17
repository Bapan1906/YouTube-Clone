import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home"; // Ensure you have a Home component
import Video from "./Pages/Video/Video"; // Ensure you have a Video component

const App = () => {
  // State to manage sidebar visibility
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      {/* Navbar component with sidebar state */}
      <Navbar setSidebar={setSidebar} />

      {/* Routes for navigating between Home and Video pages */}
      <Routes>
        {/* Home route, passing sidebar state as a prop */}
        <Route path="/" element={<Home sidebar={sidebar} />} />

        {/* Video route, capturing categoryId and videoId from URL */}
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
