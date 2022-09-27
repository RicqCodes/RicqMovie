import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchAysncDetailsMovies,
  fetchAysncDetailsSeries,
  fetchAysncSimilarMovies,
  fetchAysncSimilarSeries,
  getAllMovies,
  removeSelectedMovieOrShow,
} from "../ReduxConfig/movieSlice";
import {
  MoviesError,
  MovieWrapper,
  MovieList,
  MovieContainer,
  SeriesList,
} from "../styles/MovieListing.styled";
import MovieCard from "./MovieCard";
import DisplayDetails from "./DisplayDetails";
import Skeleton from "./Skeleton";
import useAuthStatus from "../hooks/useAuthStatus";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const { loading } = useAuthStatus();

  const movies = useSelector(getAllMovies);

  const rating = (movies.movieDetails.vote_average / 2).toFixed(1);

  useEffect(() => {
    const topMovies = movies.movies.results.find(
      (movie) => `${movie.id}` === imdbID
    );

    if (topMovies) {
      setType("Movie");
      dispatch(fetchAysncDetailsMovies(imdbID));
      dispatch(fetchAysncSimilarMovies(imdbID));
    }
    const topSeries = movies.series.results.find(
      (movie) => `${movie.id}` === imdbID
    );

    if (topSeries) {
      setType("Series");
      dispatch(fetchAysncDetailsSeries(imdbID));
      dispatch(fetchAysncSimilarSeries(imdbID));
    }

    const similar = movies.similar.results.find(
      (movie) => `${movie.id}` === imdbID
    );

    if (similar && type === "Movie") {
      dispatch(fetchAysncDetailsMovies(imdbID));
      dispatch(fetchAysncSimilarMovies(imdbID));
    } else if (similar && type === "Series") {
      dispatch(fetchAysncDetailsSeries(imdbID));
      dispatch(fetchAysncSimilarSeries(imdbID));
    }

    console.log(movies.searchResult);
    const searchMovie = movies.searchResult?.results.find(
      (movie) => `${movie.media_type}` === "movie" && `${movie.id}` === imdbID
    );
    const searchSeries = movies.searchResult?.results.find(
      (movie) => `${movie.media_type}` === "tv" && `${movie.id}` === imdbID
    );

    if (searchMovie) {
      setType("Movie");
      dispatch(fetchAysncDetailsMovies(imdbID));
      dispatch(fetchAysncSimilarMovies(imdbID));
    } else if (searchSeries) {
      setType("Series");
      dispatch(fetchAysncDetailsSeries(imdbID));
      dispatch(fetchAysncSimilarSeries(imdbID));
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    return () => {
      dispatch(removeSelectedMovieOrShow());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, imdbID]);

  let renderSimilarMovies =
    movies.similar.page === 1 ? (
      movies.similar.results.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <MoviesError>
        <h3>{movies.movies.Error}</h3>
      </MoviesError>
    );

  return (
    <MovieWrapper>
      {/* {Object.keys(movies.movieDetails).length === 0 ? ( */}
      {loading ? (
        <div>{<Skeleton type={"details"} />}</div>
      ) : (
        <>
          <DisplayDetails
            rating={+rating}
            movies={movies.movieDetails}
            textHeading={type}
          />
          <MovieList>
            <h2>
              Similar {type}
              {type === "Movie" ? "s" : ""}
            </h2>
            <MovieContainer>{renderSimilarMovies}</MovieContainer>
          </MovieList>
          <SeriesList>
            <h2>You May Also Like</h2>
            <MovieContainer>{}</MovieContainer>
          </SeriesList>
        </>
      )}
    </MovieWrapper>
  );
};

export default MovieDetails;
