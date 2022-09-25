import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  height: 7.2rem;
  /* padding: 0 40px; */
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  gap: 0;
  /* justify-content: space-between; */
  position: relative;

  @media (max-width: 65em) {
    grid-template-columns: 3fr 0.5fr;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-size: 3rem;
  font-weight: 600;
  font-family: "Rubik Distressed", cursive;

  @media (max-width: 50em) {
    font-size: 2rem;
  }
`;

export const UserImage = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  padding: 0 1.2rem;
  grid-column: -1;
  /* border: 1px solid black; */
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  position: relative;
  gap: 3.2rem;
  align-items: center;
  height: 4rem;
  /* width: 6rem; */
  border-top-left-radius: 1.8rem;
  border-bottom-left-radius: 2.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in;

  img {
    width: 38px;
    height: 38px;
    position: absolute;
    left: 0;
  }

  p {
    font-size: 1.4rem;
    color: #fff;
    align-self: center;
    font-weight: 500;
    font-family: "Peralta", cursive;
    letter-spacing: 0.08rem;
  }

  :hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  z-index: 9999;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16rem;

  @media (max-width: 72.5em) {
    gap: 4rem;
  }

  @media (max-width: 65em) {
    gap: 2rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  /* @media (max-width: 50em) {
    display: none;
  } */
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  color: white;
  width: 2.4rem !important;
  height: 2.4rem !important;
  cursor: pointer;
`;

export const Nav = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: nowrap;

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.greyShade};
  }

  @media (max-width: 65em) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Form = styled.form`
  width: 30rem;
  z-index: 1000;
`;

export const Input = styled.input`
  transition: all 0.3s ease-in-out;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  /* padding: 2rem 1rem; */
  color: #fff;
  padding: 1.5rem 1.4rem;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  border-radius: 12px;
  font-size: 1.5rem;

  ::placeholder {
    /* padding-left: 2rem; */
    padding-right: 2rem;
    color: whitesmoke;
    opacity: 0.5;
  }
`;

export const UserContainer = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.primaryColor};
  top: 7rem;
  right: 3rem;
  border-radius: 5px;
  font-size: 1.4rem;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.5);
  margin: 0 3rem;
  transition: all 0.3s ease-in;
`;

export const Profile = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin-top: 4rem;
  padding: 0 6rem;

  border-bottom: 0.5px solid rgba(255, 255, 255, 0.8);

  a {
    color: #fff;
  }

  p:hover {
    opacity: 0.8;
  }
`;

export const Logout = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin-top: 2rem;
  padding: 0 6rem;
  margin-bottom: 4rem;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.8);
  color: #fff;

  p {
    cursor: pointer;
  }

  p:hover {
    opacity: 0.8;
  }
`;
