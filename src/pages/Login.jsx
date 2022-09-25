import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

import {
  Container,
  Main,
  Input,
  Form,
  Icon,
  ForgotPassword,
} from "../styles/Login.styled";
import { ButtonLoader } from "../styles/Login.styled";
import { StyledHeader, LeftContainer, Logo } from "../styles/Header.styled";
import { addUser } from "../ReduxConfig/movieSlice";
import { useDispatch } from "react-redux";
import Oauth from "../components/Oauth";

const LogIn = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        dispatch(addUser(auth.currentUser));
        navigate("/browse");
      }
      toast.success(
        `Welcome back, ${userCredential.user.displayName.split(" ")[0]}`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    } catch (err) {
      toast.error("Wrong username or password!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsFormSubmitted(false);
    }
  };

  return (
    <Container>
      <div>
        <StyledHeader>
          <LeftContainer>
            <Link to="/">
              <Logo>Ricq Movie</Logo>
            </Link>
          </LeftContainer>
        </StyledHeader>
      </div>
      <Main>
        <Form onSubmit={onSubmit}>
          <h3>Sign In</h3>
          <Input>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email"
              required
              id="email"
              value={email}
              onChange={onChange}
            />
          </Input>
          <Input>
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <ForgotPassword>
              <Link to="/forgot-password">Forgot Password</Link>
            </ForgotPassword>
            <Icon onClick={() => setShowPassword((prevState) => !prevState)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Icon>
          </Input>
          {isFormSubmitted ? (
            <ButtonLoader
              style={{ paddingTop: "2.1rem", paddingBottom: "2.1rem" }}
              size="large"
              loading
              variant="outlined"
            />
          ) : (
            <button type="submit">Sign In</button>
          )}
          <Oauth />
          <p>
            <span>New to RicqMovie?</span>
            <Link to="/signup">
              <b> Sign Up Now</b>
            </Link>
          </p>
        </Form>
      </Main>
    </Container>
  );
};

export default LogIn;
