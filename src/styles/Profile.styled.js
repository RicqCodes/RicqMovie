import styled from "styled-components";

export const Container = styled.div`
  max-width: 100rem;
  margin: 5rem auto;
  background-color: rgba(0, 0, 0, 0.7);
  /* height: 100vh; */
  position: relative;
`;

export const Main = styled.main`
  padding: 0 6rem;
`;

export const AccountHeader = styled.header`
  /* justify-self: first baseline; */
  color: ${({ theme }) => theme.colors.fontSecondary};
  border-bottom: 0.5px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  p {
    font-size: 3.4rem;
    font-weight: 400;
  }

  svg {
    color: whitesmoke;
  }

  span {
    /* margin-left: 5rem; */
    font-size: 1.28rem;
    font-weight: 800;
    color: whitesmoke;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserGreeting = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    span {
      color: beige;
      font-family: "Peralta", cursive;
    }
  }
`;

export const MainContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1.5rem;
`;

export const PersonalDetailsContainer = styled.section`
  /* grid-template-rows: 1fr 3fr; */
  border-bottom: 0.5px solid #fff;
  /* column-gap: 6rem; */
  display: flex;
  /* gap: 6rem; */
  justify-content: space-between;
  /* margin-bottom: 3rem; */
`;

export const PersonalHeadingBox = styled.div`
  h2 {
    font-size: 1.8rem;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
`;

export const PersonalDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* column-gap: 16rem; */
`;

export const Name = styled.div`
  /* justify-content: space-between; */
  gap: 16rem;
  align-items: center;
  display: flex;

  form {
    flex: 1;
    input {
      padding: 1rem 2rem;
      border: none;
      background: transparent;
      width: 90%;
      font-size: 1.8rem;
      color: #fff;
      font-weight: 800;
      outline-color: #fff;
    }
  }
  p {
    font-size: 1.4rem;
    color: #fff;
    /* opacity: 0.6; */
    font-weight: 800;
    cursor: pointer;
  }
`;

export const Email = styled(Name)``;

export const Phone = styled(Name)``;

export const VerifyNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.4rem;
    color: #fff;
    /* opacity: 0.6; */
    font-weight: 800;
    cursor: pointer;
  }
`;

export const ChangePassword = styled(VerifyNumber)``;

export const PaymentInfo = styled(VerifyNumber)`
  border-top: 0.5px solid rgba(255, 255, 255, 0.3);
`;

export const Billing = styled(VerifyNumber)``;

export const Plan = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  border-top: 0.5px solid #fff;
  border-bottom: 0.5px solid #fff;
  h2 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }

  p {
    color: #fff;
    font-size: 1.8rem;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40rem;

  h3 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 800;
  }

  p {
    font-size: 1.4rem;
    font-weight: 800;
    cursor: pointer;
  }
`;

export const SignOutBtn = styled.button`
  /* position: absolute; */
  /* bottom: 0; */
  /* transform: translate(41rem, -11rem); */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  /* border: 0.5px solid #fff; */
  padding: 1.5rem 2rem;
  border-radius: 5px;
  font-size: 1.6rem;
  background: none;
  color: #fff;
  box-shadow: 0 3px 7px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  margin-bottom: 2rem;

  :hover {
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.2);
  }
`;

export const SpaceBelow = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;
