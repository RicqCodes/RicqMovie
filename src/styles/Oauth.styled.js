import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";

export const OauthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 0.8rem;
  div {
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: #fff;
    border-radius: 50%;
  }

  p {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
  }
`;

export const GoogleIcons = styled(GoogleIcon)`
  color: white;
  font-size: 3.6rem;
`;
