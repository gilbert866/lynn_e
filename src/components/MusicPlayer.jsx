// MusicPlayer.jsx
import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import "./MusicPlayer.css"; // Import custom CSS

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef}>
        <source src="/audio/birthday-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Button
        variant="contained"
        color="secondary"
        onClick={togglePlayPause}
        className="play-button"
        style={{
          borderRadius: "50%",
          backgroundColor: "#ff4d4d",
          padding: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {isPlaying ? (
          <PauseIcon style={{ fontSize: 40 }} />
        ) : (
          <PlayArrowIcon style={{ fontSize: 40 }} />
        )}
      </Button>
    </div>
  );
};

export default MusicPlayer;
