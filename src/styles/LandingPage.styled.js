import styled from "styled-components";

import { Main } from "./Login.styled";
import { StyledHeader } from "./Header.styled";

export const LandingStyledHeader = styled(StyledHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 50em) {
    div:nth-child(2) {
      display: none;
    }
    /* height: 100vh; */
    overflow: hidden;
  }
`;

export const LandingPageMain = styled(Main)`
  display: block;
  max-width: 60rem;
  margin: 12rem auto;
  text-align: center;
  h1 {
    font-size: 5rem;
    color: #fff;
  }

  h2 {
    font-size: 2.6rem;
    color: #fff;
    font-weight: 400;
    margin-bottom: 6rem;
  }

  p {
    font-size: 1.6rem;
    color: #fff;
  }

  form {
    width: 100%;

    div {
      display: flex;

      input {
        z-index: 10;
        width: 75%;
        padding: 1.2rem 2rem;
        border-top-left-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
      }

      button {
        z-index: 10;
        cursor: pointer;
        font-size: 1.5rem;
        color: #fff;
        /* background: blueviolet; */
        background: rgba(0, 0, 0, 0.85);
        border: none;
        padding: 0.8rem 3rem;
        border-top-right-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
      }
    }
  }

  @media (max-width: 50em) {
    visibility: hidden;

    z-index: 10;
    /* ::before {
      visibility: visible;
      display: flex;
      content: "Coming to Mobile Screen Soon!";
      font-size: 4.8rem;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
    } */
    ::before {
      visibility: visible;
      content: "";
    }
    ::after {
      visibility: visible;
      display: flex;
      content: "Coming to Mobile Screen Soon!";
      font-size: 3rem;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.fontSecondary};
      color: beige;
      font-weight: 900;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 2rem;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.7);
      /* margin-left: 2rem; */
    }
  }
`;
