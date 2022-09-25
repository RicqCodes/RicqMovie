import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import {
  StyledFeature,
  FeaturedContainer,
  FeaturedImage,
  PG,
  TextHeading,
  MovieTitle,
  SecondaryInfo,
  DescriptionText,
  TextContainer,
  Button,
  ButtonText,
} from "../styles/Featured.styled";
import Header from "./Header";
// import Rating from "./Rating";
import { FeatureRating } from "../styles/Featured.styled";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { getAllMovies } from "../ReduxConfig/movieSlice";
import MovieRating from "./Rating";
const DisplayDetails = (props) => {
  const movie = useSelector(getAllMovies);
  const movieGenre = movie.movieGenre.genres;
  // const seriesGenre = movie.seriesGenre.genres;

  const genreId = movieGenre.find((genre, id) => {
    return genre.id === +props.movies.genre_ids?.[0];
  });

  if (Object.keys(props.movies).length > 0) {
    return (
      <>
        {props.type === "featuredMovie" ? "" : <Header />}

        <StyledFeature>
          <FeaturedContainer>
            <FeaturedImage
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${props.movies.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "right top",
                zIndex: 999,
              }}
            />

            <TextContainer>
              <TextHeading>{props.textHeading}</TextHeading>
              <MovieTitle>
                {props.movies.original_title
                  ? props.movies.original_title
                  : props.movies.name}
                <span>{`(${
                  props.movies.release_date
                    ? props.movies.release_date.slice(0, 4) || 2013
                    : props.movies.first_air_date
                    ? props.movies.first_air_date.slice(0, 4) || 2013
                    : "2013"
                })`}</span>
              </MovieTitle>
              <SecondaryInfo>
                <PG>{!props.movies.adult ? "PG-13" : "PG-18"}</PG>
                {props.movies.genres ? (
                  props.movies.genres?.map((genre, id) => {
                    return <span key={id}>{genre.name || ""}</span>;
                  })
                ) : (
                  <span>{genreId.name.toUpperCase()}</span>
                )}
              </SecondaryInfo>
              <DescriptionText>{props.movies.overview}</DescriptionText>
              <FeatureRating>
                <MovieRating rating={props.rating > 1 ? props.rating : 3} />
                <p>
                  <span>{(+props.movies.vote_average).toFixed(1)}</span>
                  <span>({props.movies.vote_count})</span>
                </p>
              </FeatureRating>
              <Button>
                <PlayArrowIcon />
                <ButtonText>PLAY TRAILER</ButtonText>
              </Button>
            </TextContainer>
          </FeaturedContainer>
        </StyledFeature>
      </>
    );
  } else {
    return (
      <>
        {/* <Header /> */}
        <Skeleton type={"details"} />;
      </>
    );
  }
};

export default DisplayDetails;
