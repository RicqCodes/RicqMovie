import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
    to {
        opacity: 0.5;
    }
`;

export const MainContainer = styled.div`
  width: 28rem;
  height: 100vh;
  animation: ${skeletonAnimation} 0.5s ease infinite alternate;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 8rem;
`;

export const MovieTitle = styled.div`
  margin-top: 14.8rem;
  width: 64rem;
  background-color: #7171b8;
  margin-bottom: 1.8rem;
  height: 3rem;
`;

export const GenreContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
`;

export const PG = styled.div`
  border-radius: 9px;
  /* height: 0.5rem; */
  width: 5rem;
  height: 2rem;
  background-color: #7171b8;
`;

export const Genre = styled.div`
  width: 12rem;
  height: 3rem;
  background-color: #7171b8;
`;

export const TextContent = styled.div`
  width: 64rem;
  height: 6.4rem;
  background-color: #7171b8;
  margin-bottom: 3rem;
`;

export const Rating = styled.div`
  width: 10rem;
  height: 3rem;
  background-color: #7171b8;
  margin-bottom: 3rem;
`;

export const TrailerButton = styled.div`
  width: 20rem;
  height: 4rem;
  background-color: #7171b8;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 3rem;
  width: 130rem;
`;

export const MovieCard = styled.div`
  width: 64rem;
  height: 32rem;
  background-color: #7171b8;
`;

export const SearchContainer = styled.div`
  width: 28rem;
  height: 100vh;
  margin-top: 6.4rem;
  animation: ${skeletonAnimation} 0.5s ease infinite alternate;
`;

export const Type = styled.div`
  width: 6rem;
  height: 2rem;
  background-color: #7171b8;
`;

export const BoxContainer = styled.div`
  display: flex;
  width: 136rem;
  gap: 3rem;
`;

export const SearchCard = styled.div`
  width: 42.6rem;
  height: 642rem;
  background-color: #7171b8;
`;
