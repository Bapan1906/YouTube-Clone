import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recomended from "../../Components/Recomended/Recomended";
import { useParams } from "react-router-dom";

const Video = () => {
  // Extracting videoId and categoryId from URL parameters
  const { videoId, categoryId } = useParams(); // Using consistent lowercase "videoId"

  return (
    <div className="play-container">
      {/* Passing the videoId prop to PlayVideo component */}
      <PlayVideo videoId={videoId} /> {/* Passing the correct prop name */}
      {/* Passing the categoryId prop to Recomended component */}
      <Recomended categoryId={categoryId} />
    </div>
  );
};

export default Video;
