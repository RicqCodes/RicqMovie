// import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const CardInfo = styled.div`
  position: absolute;
  /* bottom: -35%; */
  bottom: ${(props) => props.bottom + "%"};
  /* margin-top: 10rem; */
  margin-top: ${(props) => props.marginTop + "rem"};
  /* padding-left: 1rem; */
  padding-left: ${(props) => props.paddingLeft + "rem"};
  /* padding-right: 1rem; */
  padding-right: ${(props) => props.paddingRight + "rem"};
  /* z-index: 10; */
  z-index: ${(props) => props.zIndex};
  overflow: hidden;

  color: ${({ theme }) => theme.colors.fontPrimary};

  h4 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2.8rem;
    z-index: 50;

    text-overflow: ellipsis;
    transition: margin-bottom 0.2s ease-out;
  }

  h4 span {
    font-size: 1.5rem;
    opacity: 0.5;
    margin-left: 1rem;
  }

  p {
    font-size: 1.6rem;
    color: #fff;
  }
`;

export const CardItem = styled.div`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  background: ${({ theme }) => theme.colors.secondaryColor};
  cursor: pointer;
  transition: all 0.3s ease-in;
  position: relative;
  border-radius: ${(props) => props.borderRadius};
  margin-left: ${(props) => props.marginLeft};

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      ellipse farthest-side at 0 100%,
      #2c3e50,
      transparent
    );
    background-size: 150% 150%;
    background-position: 0 0;
    top: 0;
    left: 0;
    transition: all 0.4s;
    z-index: 1;
    border-radius: 2rem;
  }

  :hover {
    scale: 0.98;
    ${CardInfo} {
      transition: all 0.4s ease-in;
      bottom: 5%;
    }
  }
  ${CardInfo} {
    transition: all 0.4s ease-out;
    bottom: -35%;
  }
`;

export const CardInner = styled.div`
  overflow: hidden;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
`;

export const CardTop = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  img {
    width: 100%;
    height: 100%;
    /* border-radius: 15px; */
  }
`;

export const CardBottom = styled.div`
  /* padding: 2rem; */
  /* position: relative; */
  overflow: hidden;
`;

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.greyShade};
  }
  span {
    opacity: 1;
    font-size: 2rem;
  }
  svg {
    /* color: #fff; */
    -webkit-tap-highlight-color: #fff;
  }
`;
