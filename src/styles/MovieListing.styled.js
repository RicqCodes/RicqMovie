import styled from "styled-components";

export const MoviesError = styled.div``;

export const MovieWrapper = styled.div``;

export const MovieList = styled.div`
  margin: 2rem 0;
  h2 {
    color: ${({ theme }) => theme.colors.fontSecondary};
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  mask-image: linear-gradient(90deg, #000 80%, transparent);
`;

export const SeriesList = MovieList;

export const MovieContainer = styled.div`
  display: flex;
  /* padding: 1rem; */
  margin-left: -1rem;
  margin-top: -1rem;
  overflow-y: hidden;
  /* overflow-x: hidden; */
  scroll-snap-type: x mandatory;
  gap: 1rem;

  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Movie = styled.div``;
