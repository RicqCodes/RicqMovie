import styled from "styled-components";

export const ResetMain = styled.div`
  /* min-width: 38rem; */

  ::before {
    position: absolute;
    content: "";
    background-image: url("https://i.imgur.com/fUriHiy.jpg");
    background-size: cover;
    mix-blend-mode: overlay;
    mask-image: radial-gradient(
      ellipse farthest-side at 50% 50%,
      #4d4da6,
      rgba(0, 0, 0, 0.1)
    );
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 2;
  }
  display: flex;
`;

export const ResetBox = styled.div`
  max-width: 45rem;
  margin: 5rem auto;
  background: #fff;
  z-index: 10;
  border-radius: 7px;

  div {
    padding: 0 3rem;
  }

  h1 {
    text-align: center;
    padding-top: 4rem;
    margin-bottom: 5rem;
    font-size: 3.3rem;
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 5rem;
  }
`;

export const Form = styled.form`
  text-align: center;
  width: 100%;
  padding-bottom: 3rem;
  z-index: 200;

  input {
    padding: 1.3rem 2.4rem;
    width: 75%;
    outline: none;
    margin-bottom: 2.4rem;
    background-color: #fff;
    font-size: 1.6rem;
    border-radius: 7px;

    ::placeholder {
      font-size: 1.6rem;
      opacity: 0.5;
      letter-spacing: 0.1rem;
    }
  }

  button {
    width: 86%;
    padding: 1.3rem 2.4rem;
    cursor: pointer;
    background: #4d4da6;
    color: #fff;
    margin-bottom: 5rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 7px;
  }
`;
