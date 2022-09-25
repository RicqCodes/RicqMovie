import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

import {
  StyledHeader,
  Logo,
  UserImage,
  LeftContainer,
  RightContainer,
} from "../styles/Header.styled";
import userImage from "../images/user.png";
import { Container } from "../styles/Login.styled";
import { ButtonLoader } from "../styles/Login.styled";
import { ResetMain, ResetBox, Form } from "../styles/ForgotPassword.styled";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success("Reset Link Sent. Check your registered Email to proceed", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/login");
    } catch (err) {
      setIsFormSubmitted(false);
      console.log();
      toast.error("Email does not exist", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <Container>
      <StyledHeader>
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
      </StyledHeader>
      <ResetMain>
        <ResetBox>
          <div>
            <h1>Forgot Password</h1>
            <p>
              We will send you an email with instructions on how to reset your
              password.
            </p>
          </div>
          <Form onSubmit={onSubmit}>
            <input
              type="email"
              required
              placeholder="name@example.com"
              onChange={onChange}
            />
            {isFormSubmitted ? (
              <ButtonLoader
                style={{ paddingTop: "2.1rem", paddingBottom: "2.1rem" }}
                size="large"
                loading
                variant="outlined"
              />
            ) : (
              <button type="submit">Email Me</button>
            )}
          </Form>
        </ResetBox>
      </ResetMain>
    </Container>
  );
};

export default ForgotPassword;
