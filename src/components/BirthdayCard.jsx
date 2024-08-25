import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import CustomImageCarousel from "./CustomImageCarousel";

const BirthdayCard = ({ name }) => {
  // Array of image URLs to be displayed in the avatar circle
  const images = [
    "/images/pic.jpeg",
    "/images/pic2.jpg",
    // Add more image paths as needefw:q:
  ];

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, padding: 3 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          fontStyle: "italic",
        }}
      >
        <Avatar sx={{ width: 150, height: 150 }}>
          <CustomImageCarousel images={images} />
        </Avatar>
      </div>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Happy Birthday, {name}!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Wishing you all the best on your special day! May your year be filled
          with joy and success.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BirthdayCard;
