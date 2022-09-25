import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  // StyledHeader,
  Logo,
  UserImage,
  LeftContainer,
  RightContainer,
} from "../styles/Header.styled";
import userImage from "../images/user.png";
import { Container } from "../styles/Login.styled";
import {
  LandingStyledHeader,
  LandingPageMain,
} from "../styles/LandingPage.styled";

const LandingPage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/signup", { state: { input } });
  };
  return (
    <Container>
      <LandingStyledHeader>
        <LeftContainer>
          <Link to="/">
            <Logo>Ricq Movie</Logo>
          </Link>
        </LeftContainer>
        <RightContainer>
          <UserImage>
            <div></div>
            <img src={userImage} alt="user" />
            <Link to="/login">
              <p>Login</p>
            </Link>
          </UserImage>
        </RightContainer>
      </LandingStyledHeader>
      <LandingPageMain>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <form onSubmit={onSubmit}>
          <p>
            Ready to watch? Enter your email to create an account, if you
            already have an account log in.
          </p>
          <div>
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit">Try 7 Days FREE</button>
          </div>
        </form>
      </LandingPageMain>
    </Container>
  );
};

export default LandingPage;
