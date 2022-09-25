import React from "react";
import { Link } from "react-router-dom";

import {
  CardItem,
  CardInner,
  CardTop,
  CardBottom,
  CardInfo,
  StyledRating,
} from "../styles/MovieCard.styled";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const rating = (movie.vote_average / 2).toFixed(1);

  return (
    <CardItem borderRadius="2rem" marginLeft="1rem">
      <Link to={`/movie/${movie.id}`}>
        <CardInner>
          <CardTop height="35rem" width="22rem">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.Title}
            />
          </CardTop>
          <CardBottom>
            <CardInfo
              bottom="-35"
              marginTop="10"
              paddingLeft="1"
              paddingRight="1"
              zIndex="10"
            >
              <h4>
                {movie.name &&
                movie.name.length + movie.first_air_date.slice(0, 4).length > 17
                  ? movie.name.slice(0, 17) + "..."
                  : movie.name}

                {movie.title &&
                movie.title.length + movie.release_date.slice(0, 4).length > 17
                  ? movie.title.slice(0, 17) + "..."
                  : movie.title}

                <span>
                  {movie.name &&
                  movie.name.length + movie.first_air_date.slice(0, 4).length <
                    17
                    ? `(${movie.first_air_date.slice(0, 4)})`
                    : ""}

                  {movie.title &&
                  movie.title.length + movie.release_date.slice(0, 4).length <
                    17
                    ? `(${movie.release_date.slice(0, 4)})`
                    : ""}
                </span>
              </h4>

              <p>{`${movie.overview.slice(0, 40)}...`}</p>
              <StyledRating>
                <Rating rating={rating} />
                <p>{(+movie.vote_average).toFixed(1)}</p>
              </StyledRating>
            </CardInfo>
          </CardBottom>
        </CardInner>
      </Link>
    </CardItem>
  );
};

export default MovieCard;
