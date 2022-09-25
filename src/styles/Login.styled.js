// import { ThirteenMp } from "@mui/icons-material";
import styled from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton";

export const Container = styled.div`
  margin: 0 -4rem;
  padding: 0 4rem;
  position: relative;

  div {
    z-index: 10;
  }
`;
export const Main = styled.div`
  ::before {
    position: absolute;
    content: "";
    background-image: url("https://i.imgur.com/MrqB97w.jpg");
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
  align-items: center;
  justify-content: center;
  /* height: 50rem; */
`;

export const Form = styled.form`
  padding: 4.8rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1.6rem;
  background-color: rgba(26, 36, 47, 0.7);
  /* background-color: black; */
  width: 100%;
  max-width: 40rem;
  z-index: 10;

  h3 {
    margin-bottom: 4.8rem;
    font-size: 2.1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.fontPrimary};
  }

  button {
    background: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    width: 100%;
    padding: 1.3rem 3rem;
    border-radius: 5px;
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
  }

  p {
    font-size: 1.4rem;
    margin-top: 4.8rem;
    color: ${({ theme }) => theme.colors.fontPrimary};

    b {
      color: ${({ theme }) => theme.colors.fontSecondary};
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 3rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
  position: relative;

  label {
    opacity: 0.75;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  input {
    background: #0f171e;
    padding: 1.2rem 1.8rem;
    /* width: 75%; */
    border: 1px solid rgba(128, 128, 192, 0.4);
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.fontPrimary};
    outline: none;
    transition: all 0.3s;

    ::placeholder {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.2rem;
    }
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;

  a {
    color: red;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 1.2rem;
  bottom: 2.8rem;
  cursor: pointer;
`;

export const ButtonLoader = styled(LoadingButton)`
  button {
    /* padding: 4rem !important; */
  }
  span {
    height: 4rem;
    color: #fff;
  }
`;
