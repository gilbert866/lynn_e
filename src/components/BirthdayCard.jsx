import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const BirthdayCard = ({ name }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, padding: 3 }}>
      <Avatar
        alt={name}
        src="/images/pic.jpeg"
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
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
