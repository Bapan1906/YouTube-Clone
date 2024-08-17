import React, { useEffect, useState } from "react";
import "./Recomended.css";
import { API_KEY, value_conveter } from "../../data"; // Corrected import statement
import { Link } from "react-router-dom";

const Recomended = ({ categoryId = "videoCategoryId=0" }) => {
  const [aipData, setApiData] = useState([]);

  // Function to fetch data from YouTube API
  const fetchData = async () => {
    // Construct the URL to fetch related videos based on the categoryId
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&${categoryId}&key=${API_KEY}`;

    // Fetch data from the API and update the state with the response
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  // useEffect hook to fetch data when the component mounts or categoryId changes
  useEffect(() => {
    fetchData();
  }, [categoryId]); // Added dependency to refetch data when categoryId changes

  return (
    <div className="recomended">
      {aipData.map((items) => (
        <Link
          key={items.id}
          to={`/video/${items.snippet.categoryId}/${items.id}`}
        >
          <div className="side-video-list">
            <img
              src={items.snippet.thumbnails.medium.url}
              alt={items.snippet.title}
            />
            <div className="vid-info">
              <h4>{items.snippet.title}</h4>
              <p>{items.snippet.channelTitle}</p>
              <p>{value_conveter(items.statistics.viewCount)} Views</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recomended;
