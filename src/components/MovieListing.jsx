import React from "react";
import { useSelector } from "react-redux";

import { getAllMovies } from "../ReduxConfig/movieSlice";
import {
  MoviesError,
  MovieWrapper,
  MovieList,
  MovieContainer,
  SeriesList,
  // Movie,
} from "../styles/MovieListing.styled";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies =
    movies.movies.page === 1 ? (
      movies.movies.results.map((movie, index) => {
        return <MovieCard type={"movies"} key={index} movie={movie} />;
      })
    ) : (
      <MoviesError>
        <h3>{movies.movies.Error}</h3>
      </MoviesError>
    );

  let renderSeries =
    movies.series.page === 1 ? (
      movies.series.results.map((movie, index) => {
        return <MovieCard type={"series"} key={index} movie={movie} />;
      })
    ) : (
      <MoviesError>
        <h3>{movies.series.Error}</h3>
      </MoviesError>
    );

  return (
    <MovieWrapper>
      <MovieList>
        <h2>Latest & Trending Movies</h2>
        <MovieContainer>{renderMovies}</MovieContainer>
      </MovieList>
      <SeriesList>
        <h2>Top Rated Series For You</h2>
        <MovieContainer>{renderSeries}</MovieContainer>
      </SeriesList>
    </MovieWrapper>
  );
};

export default MovieListing;
