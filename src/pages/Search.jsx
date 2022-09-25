import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../ReduxConfig/movieSlice";
import { MoviesError } from "../styles/MovieListing.styled";
import {
  SearchResults,
  TextContainer,
  MovieContainer,
} from "../styles/Search.style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BigMovieCard from "../components/BigMovieCard";
import Skeleton from "../components/Skeleton";

const Search = () => {
  const movies = useSelector(getAllMovies);

  let fetchSearch =
    movies.searchResult.page === 1 ? (
      movies.searchResult.results.map((movie, index) => {
        console.log(movie);
        return <BigMovieCard key={index} movie={movie} />;
      })
    ) : (
      <MoviesError>
        <h3>{movies.movies.Error}</h3>
      </MoviesError>
    );

  return (
    <>
      <Header />
      {Object.keys(movies.searchResult).length === 0 ? (
        // <div>We foound nothing while searching! :(</div>
        <Skeleton type={"search"} />
      ) : (
        <SearchResults>
          <TextContainer>Search Results</TextContainer>
          <MovieContainer>{fetchSearch}</MovieContainer>
        </SearchResults>
      )}
      <Footer />
    </>
  );
};

export default Search;
