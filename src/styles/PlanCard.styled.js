import styled from "styled-components";

export const PlanCardContainer = styled.div`
  /* padding: 1rem 5rem; */
`;

export const MainContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex: 0.25 1;
  align-items: center;
  justify-content: center;
  width: 14rem;
  max-width: 24rem;
  flex-flow: column;
  padding: 0 3rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  border-radius: 8px;

  :hover {
    scale: 1.04;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  ul {
    width: 100%;
    line-height: 1.7;
    list-style: none;
    padding: 0;
    margin-bottom: 4rem;

    li {
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }
  }

  p {
    font-size: 2.4rem;
    font-weight: 800;
    letter-spacing: 0.1rem;

    span {
      letter-spacing: 0;
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  button {
    border: none;
    width: 100%;
    padding: 1rem 3rem;
    margin-bottom: 0.8rem;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;
