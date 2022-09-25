import React from "react";
import { Link } from "react-router-dom";
import {
  BigCardBottom,
  BigCardItem,
  BigCardInner,
  BigCardTop,
  BigCardInfo,
  BigStyledRating,
  Kind,
} from "../styles/BigMovieCard.styled";
import Rating from "./Rating";

const BigMovieCard = ({ movie }) => {
  const rating = (movie.vote_average / 2).toFixed(1);

  let movieType = movie.release_date ? "MOVIE" : "SERIES";
  //   console.log(type);

  return (
    <BigCardItem borderRadius="2rem" marginLeft="1rem" type={movieType}>
      <Kind>{movieType}</Kind>
      <Link to={`/movie/${movie.id}`}>
        <BigCardInner>
          <BigCardTop height="35rem" width="28rem">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.Title}
            />
          </BigCardTop>
          <BigCardBottom>
            <BigCardInfo
              bottom="-35"
              marginTop="10"
              paddingLeft="1"
              paddingRight="3"
              zIndex="10"
            >
              <h4>
                {movie.name &&
                movie.name?.length + movie.first_air_date?.slice(0, 4).length >
                  30
                  ? movie.name?.slice(0, 30) + "..."
                  : movie.name}

                {movie.title &&
                movie.title?.length + movie.release_date?.slice(0, 4).length >
                  30
                  ? movie.title?.slice(0, 30) + "..."
                  : movie.title}

                <span>
                  {movie.name &&
                  movie.name?.length +
                    movie.first_air_date?.slice(0, 4).length <
                    17
                    ? `(${movie.first_air_date?.slice(0, 4)})`
                    : ""}

                  {movie.title &&
                  movie.title?.length + movie.release_date?.slice(0, 4).length <
                    17
                    ? `(${movie.release_date.slice(0, 4)})`
                    : ""}
                </span>
              </h4>

              <p>{`${movie.overview?.slice(0, 80)}...`}</p>
              <BigStyledRating>
                <Rating rating={rating} />
                <p>{(+movie.vote_average).toFixed(1)}</p>
              </BigStyledRating>
            </BigCardInfo>
          </BigCardBottom>
        </BigCardInner>
      </Link>
    </BigCardItem>
  );
};

export default BigMovieCard;
