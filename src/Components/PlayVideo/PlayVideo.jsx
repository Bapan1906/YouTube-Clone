import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video from "../../assets/video.mp4"; // Local fallback video (optional)
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY } from "../../data"; // Named export
import { value_conveter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = ({ videoId = "dQw4w9WgXcQ" }) => {
  // Default fallback video ID
  const [aipData, setApiData] = useState(null); // State to store video data
  const [chennelData, setChennelData] = useState(null); // State to store channel data
  const [commentData, setCommentData] = useState([]); // State to store comment data

  // const{videoId} = useParams(); // Uncomment if using videoId from URL params

  // Function to fetch video data from YouTube API
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(videoDetails_url);
    const data = await response.json();
    setApiData(data.items[0]); // Set video data to state
  };

  // Function to fetch channel and comment data
  const fetchOtherData = async () => {
    if (aipData) {
      // Fetching channel data if video data is available
      const chennelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${aipData.snippet.channelId}&key=${API_KEY}`;
      const response = await fetch(chennelData_url);
      const data = await response.json();
      setChennelData(data.items[0]); // Set channel data to state
    }

    // Fetching comment data
    const comment_Url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}`;
    const response = await fetch(comment_Url);
    const data = await response.json();
    setCommentData(data.items); // Set comment data to state
  };

  // Fetch video data when component mounts or videoId changes
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  // Fetch other data when video data changes
  useEffect(() => {
    fetchOtherData();
  }, [aipData]);

  return (
    <div className="play-video">
      {/* Embed YouTube video */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {/* Video title */}
      <h3>{aipData ? aipData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        {/* Video statistics and actions */}
        <p>
          {aipData ? value_conveter(aipData.statistics.viewCount) : "0"} Views
          &bull; {aipData ? moment(aipData.snippet.publishedAt).fromNow() : " "}
        </p>
        <div>
          <span>
            <img src={like} alt="like" />{" "}
            {aipData ? value_conveter(aipData.statistics.likeCount) : "0"}
          </span>
          <span>
            <img src={dislike} alt="dislike" />{" "}
            {aipData ? aipData.statistics.dislikeCount : "0"}
          </span>
          <span>
            <img src={share} alt="share" /> share
          </span>
          <span>
            <img src={save} alt="save" /> save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        {/* Publisher (channel) info */}
        <img
          src={chennelData ? chennelData.snippet.thumbnails.default.url : ""}
          alt="Publisher"
        />
        <div>
          <p>{aipData ? aipData.snippet.channelTitle : ""}</p>
          <span>
            {chennelData
              ? value_conveter(chennelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        {/* Video description */}
        <p>
          {aipData
            ? aipData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>

        <hr />
        <h4>
          {aipData ? value_conveter(aipData.statistics.commentCount) : 102}{" "}
          Comments
        </h4>

        {/* Comment Section */}
        {commentData.map((item, index) => {
          const topComment = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="comment">
              <img
                src={topComment.authorProfileImageUrl || user_profile}
                alt={topComment.authorDisplayName || "User"}
              />
              <div>
                <h3>
                  {topComment.authorDisplayName}{" "}
                  <span>{moment(topComment.publishedAt).fromNow()}</span>
                </h3>
                <p>{topComment.textDisplay}</p>
                <div className="comment-action">
                  <span>
                    <img src={like} alt="like" />{" "}
                    {value_conveter(topComment.likeCount)}
                  </span>
                  <span>
                    <img src={dislike} alt="dislike" /> 24
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
