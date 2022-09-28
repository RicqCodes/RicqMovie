import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

import {
  Container,
  Main,
  Input,
  Form,
  ButtonLoader,
} from "../styles/Login.styled";
import { IconSignup } from "../styles/Signup.styled";
import { StyledHeader, LeftContainer, Logo } from "../styles/Header.styled";
import Oauth from "../components/Oauth";

// Signup Page Component
const Signup = () => {
  const location = useLocation();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: location.state?.input || "",
    password: "",
  });

  const { name, email, password } = formData;

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

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: `https://avatars.dicebear.com/api/bottts/${email}.svg`,
      });

      const copyOfFormData = { ...formData };
      delete copyOfFormData.password;
      copyOfFormData.timeStamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), copyOfFormData);

      toast.success("Signed up Successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate("/plan");
    } catch (error) {
      toast.error("Failed to Register!", {
        position: toast.POSITION.TOP_CENTER,
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
          <h3>Sign Up</h3>
          <Input>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Name"
              required
              id="name"
              value={name}
              onChange={onChange}
            />
          </Input>
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
              required
              id="password"
              value={password}
              onChange={onChange}
            />

            <IconSignup
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconSignup>
          </Input>

          {isFormSubmitted ? (
            <ButtonLoader
              style={{ paddingTop: "2.1rem", paddingBottom: "2.1rem" }}
              size="large"
              loading
              variant="outlined"
            />
          ) : (
            <button type="submit">Sign Up</button>
          )}
          <Oauth />
          <p>
            <span>Already Have An Account?</span>
            <Link to="/login">
              <b> Sign In</b>
            </Link>
          </p>
        </Form>
      </Main>
    </Container>
  );
};

export default Signup;
