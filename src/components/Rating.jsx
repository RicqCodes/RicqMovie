import React from "react";
import Rating from "@mui/material/Rating";

const MovieRating = ({ rating }) => {
  return (
    <Rating
      style={{ opacity: 1 }}
      name="half-rating-read"
      defaultValue={+rating}
      precision={0.5}
      size="large"
      readOnly
    />
  );
};

export default MovieRating;
