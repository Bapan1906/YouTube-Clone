import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { value_conveter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch video data from YouTube API
  const fetchData = async () => {
    // URL to fetch the list of popular videos based on the category
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    // Fetch data from the URL
    await fetch(videoList_url)
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setData(data.items)) // Set data to state
      .catch((error) => console.error("Error fetching data:", error)); // Handle any errors
  };

  // Fetch data when the component mounts or when the category changes
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
          key={index}
        >
          {/* Thumbnail image of the video */}
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          {/* Title of the video */}
          <h2>{item.snippet.title}</h2>
          {/* Channel title */}
          <h3>{item.snippet.channelTitle}</h3>
          {/* Views count and time since published */}
          <p>
            {value_conveter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
