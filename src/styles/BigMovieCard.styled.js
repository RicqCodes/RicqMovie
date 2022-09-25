import styled from "styled-components";

export const BigCardInfo = styled.div`
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
    margin-bottom: 3rem;
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
  overflow: hidden;
`;

export const BigCardItem = styled.div`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  /* width: 48rem; */
  /* background: ${({ theme }) => theme.colors.secondaryColor}; */
  /* backgroun */
  width: calc(33.33333% - 2.7rem);
  cursor: pointer;
  transition: all 0.3s ease-in;
  position: relative;
  border-radius: ${(props) => props.borderRadius};
  margin-left: ${(props) => props.marginLeft};
  overflow: hidden;
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

  ::after {
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    content: ${(props) => props.type};
    /* content: "Movies"; */
    background: #fff;
    padding: 0.5rem;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  :hover {
    scale: 0.98;
    ${BigCardInfo} {
      transition: all 0.4s ease-in;
      bottom: 5%;
    }
  }
  ${BigCardInfo} {
    transition: all 0.4s ease-out;
    bottom: -40%;
  }
`;

export const BigCardInner = styled.div`
  overflow: hidden;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
`;

export const BigCardTop = styled.div`
  /* height: ${(props) => props.height};
  width: ${(props) => props.width}; */
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    /* border-radius: 15px; */
  }
`;

export const BigCardBottom = styled.div`
  /* padding: 2rem; */
  /* position: relative; */
  overflow: hidden;
`;

export const BigStyledRating = styled.div`
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

export const Kind = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.2rem;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;
