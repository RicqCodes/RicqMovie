import styled from "styled-components";

export const SearchResults = styled.div`
  margin-top: 2rem;
`;

export const TextContainer = styled.div`
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontSecondary};
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  /* grid-template-columns: repeat(4, minmax(3rem, 1fr));
  overflow: hidden; */

  margin-bottom: 4rem;
`;
