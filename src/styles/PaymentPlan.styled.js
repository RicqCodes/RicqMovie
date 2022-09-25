import styled from "styled-components";

export const PaymentContainer = styled.div`
  max-width: 120rem;
  margin: 18rem auto;
  /* background: green; */
  /* height: 50vh; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 2rem;
  max-width: 100.24rem;
  margin-bottom: 8rem;

  div:nth-child(4) button {
    background-color: #4d4da6;
    color: #fff;
    font-weight: 500;
  }
`;

export const SkipButton = styled.div`
  text-align: center;

  button {
    border: none;
    padding: 1.2rem 3rem;
    border-radius: 5px;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);

    font-size: 1.4rem;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-weight: 500;

    :hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;
