import React from "react";

import {
  MainContainer,
  DescriptionContainer,
  MovieTitle,
  GenreContainer,
  PG,
  Genre,
  TextContent,
  Rating,
  TrailerButton,
  CardContainer,
  MovieCard,
  SearchContainer,
  Type,
  BoxContainer,
  SearchCard,
} from "../styles/Skeleton.styled";
import Header from "./Header";

export default function Skeleton({ type }) {
  const DetailsSkeleton = () => (
    <>
      <Header />
      <div>
        <MainContainer>
          <DescriptionContainer>
            <MovieTitle></MovieTitle>
            <GenreContainer>
              <PG></PG>
              <Genre></Genre>
            </GenreContainer>
            <TextContent></TextContent>
            <Rating></Rating>
            <TrailerButton></TrailerButton>
          </DescriptionContainer>
          <CardContainer>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
          </CardContainer>
        </MainContainer>
      </div>
    </>
  );
  const SearchSkeleton = () => (
    <>
      <Header />
      <div>
        <SearchContainer>
          <Type></Type>
          <BoxContainer>
            <SearchCard></SearchCard>
            <SearchCard></SearchCard>
            <SearchCard></SearchCard>
          </BoxContainer>
        </SearchContainer>
      </div>
    </>
  );

  return (
    <div>{type === "details" ? <DetailsSkeleton /> : <SearchSkeleton />}</div>
  );

  //   return <div>{<DetailsSkeleton />}</div>;
}
