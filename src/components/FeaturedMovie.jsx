import React from "react";
import { useSelector } from "react-redux";

import { getAllMovies } from "../ReduxConfig/movieSlice";
import DisplayDetails from "./DisplayDetails";

const FeaturedMovie = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  const rating = (movies.featured.vote_average / 2).toFixed(1);

  return (
    <DisplayDetails
      type={"featuredMovie"}
      rating={+rating}
      movies={movies.featured}
      textHeading={"FEATURED MOVIE FOR TODAY"}
    />
  );
};

export default FeaturedMovie;
