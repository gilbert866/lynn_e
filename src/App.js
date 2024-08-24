import React from "react";
import BirthdayCard from "./components/BirthdayCard";
import Animation from "./components/Animation";
import MusicPlayer from "./components/MusicPlayer";
import LoopingTypewriter from "./components/LoopingTypewriter";
import { Container, Typography } from "@mui/material";
import Balloon from "./components/Balloons.jsx";
import "./App.css";
function App() {
  return (
    <Container
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#ffe6e6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoopingTypewriter />
      <Typography
        variant="h6"
        style={{
          fontFamily: "Playfair Display, serif",
          color: "#ff6666",
          marginTop: "20px",
          fontStyle: "italic",
        }}
      >
        Wishing you a day filled with love and joy!
      </Typography>

      <Animation />
      <BirthdayCard name="Lynne" />

      <MusicPlayer />
      {/* Adding Balloons */}
      <Balloon color="#ff4d4d" left="10%" animationDelay="0s" />
      <Balloon color="#ffcc00" left="30%" animationDelay="1s" />
      <Balloon color="#66b3ff" left="50%" animationDelay="2s" />
      <Balloon color="#ff66b3" left="70%" animationDelay="3s" />
      <Balloon color="#99ff99" left="90%" animationDelay="4s" />
    </Container>
  );
}

export default App;
