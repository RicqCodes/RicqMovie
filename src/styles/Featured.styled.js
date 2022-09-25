import styled from "styled-components";
import { StyledRating } from "../styles/MovieCard.styled";

export const StyledFeature = styled.div`
  padding-top: 10rem;
  margin-bottom: 13rem;
`;

export const FeaturedContainer = styled.div``;

export const TextHeading = styled.p`
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 5rem;
  margin-bottom: 0;
`;

export const MovieTitle = styled.h2`
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-size: 3.6rem;
  margin-top: 0;

  span {
    color: ${({ theme }) => theme.colors.greyShade};
    margin-left: 1rem;
  }
`;

export const FeaturedImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  /* height: 48rem; */
  height: 100%;
  mix-blend-mode: overlay;
  mask-image: radial-gradient(
    ellipse farthest-side at 75% 10%,
    #000,
    transparent
  );
  pointer-events: none;
  z-index: 200;

  @media (max-width: 72.5em) {
    height: 48rem;
  }
`;

export const TextContainer = styled.div`
  width: 45%;
`;

export const PG = styled.span`
  padding: 0.5rem 1rem;
  background: hsla(0, 0%, 100%, 0.1);
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 1rem;
`;

export const SecondaryInfo = styled.p`
  span {
    color: ${({ theme }) => theme.colors.fontPrimary};
    font-size: 1.2rem;
  }

  span:nth-child(n + 2):nth-last-child(n + 2) {
    ::after {
      content: ", ";
    }
  }
`;

export const DescriptionText = styled.p`
  color: whitesmoke;
  font-size: 1.6rem;
  line-height: 1.8;
`;

export const FeatureRating = styled(StyledRating)`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    font-size: 2.4rem;
  }

  p {
    color: whitesmoke;

    span {
      font-size: 1.4rem;
    }
    span:last-child {
      margin-left: 0.6rem;
    }
  }

  margin-bottom: 2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  outline: none;
  border: none;
  padding: 1rem 3rem;
  border-radius: 30px;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-size: 1.3rem;
`;
