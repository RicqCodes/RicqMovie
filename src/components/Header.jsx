import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledHeader,
  Logo,
  UserImage,
  LeftContainer,
  RightContainer,
  Nav,
  Form,
  SearchIcon,
  Search,
  Input,
  UserContainer,
  Profile,
  Logout,
} from "../styles/Header.styled";
import userImage from "../images/user.png";
import {
  addText,
  fetchAsyncSearch,
  getAllMovies,
  removeUser,
} from "../ReduxConfig/movieSlice";
import { getAuth } from "firebase/auth";
import useAuthStatus from "../hooks/useAuthStatus";

const Header = () => {
  const auth = getAuth();
  const data = useSelector(getAllMovies);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [isFloatOpen, setIsFloatOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const { loggedIn } = useAuthStatus();

  const onSearchClick = () => {
    setDisplay(!display);
  };

  // const user = data.user;
  const user = auth.currentUser;
  const onInput = (e) => {
    setSearchParams({ q: e.target.value });
    setTerm(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchAsyncSearch(term));
    setDisplay(false);
    dispatch(addText(""));
    setTerm("");
    navigate("/search");
  };

  const onClick = () => {
    setIsFloatOpen((prevState) => !prevState);
  };

  const onLogout = () => {
    auth.signOut();
    dispatch(removeUser());
    setIsFloatOpen((prevState) => !prevState);
    navigate("/login");
  };

  return (
    <StyledHeader>
      <LeftContainer>
        <Link to="/browse">
          <Logo>Ricq Movie</Logo>
        </Link>
        <Nav>
          <Link to="/browse">Home</Link>
          <Link to="/">Tv Series</Link>
          <Link to="/">Movies</Link>
          <Link to="/">My List</Link>
        </Nav>
      </LeftContainer>
      <RightContainer>
        <Search>
          <Form onSubmit={onInputSubmit}>
            <Input
              style={{ display: `${display ? "inline-block" : "none"}` }}
              value={term}
              type="search"
              placeholder="Search movies or shows"
              onChange={onInput}
            />
          </Form>
          <SearchIcon onClick={onSearchClick} />
        </Search>
        <UserImage
          onClick={user && Object.entries(user).length !== 0 && onClick}
        >
          <div></div>
          {loggedIn ? (
            <>
              <img src={user?.photoURL} alt="user" />
              <p>{user.displayName?.split(" ")[0]}</p>
            </>
          ) : (
            <>
              <img src={userImage} alt="user" />
              <Link to="/login">
                <p>Login</p>
              </Link>
            </>
          )}
        </UserImage>

        <UserContainer
          style={{ display: `${isFloatOpen ? "inline-block" : "none"}` }}
        >
          <Profile onClick={() => setIsFloatOpen(!isFloatOpen)}>
            <Link to="/profile">
              <p>Account</p>
            </Link>
          </Profile>
          <Logout onClick={onLogout}>
            <p>Sign Out</p>
          </Logout>
        </UserContainer>
      </RightContainer>
    </StyledHeader>
  );
};

export default Header;
