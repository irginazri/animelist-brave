"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [IsOpen, setIsOpen] = useState(true);

  const handleVideoPlayerButton = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button
          onClick={handleVideoPlayerButton}
          className="text-me-white float-right bg-me-accent px-3 mb-2 hover:bg-me-primary rounded-sm"
        >
          x
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };

  return IsOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayerButton}
      className="fixed bottom-4 right-5 w-32 bg-me-accent text-me-white hover:bg-me-primary rounded-md"
    >
      Trailer Video
    </button>
  );
};

export default VideoPlayer;
