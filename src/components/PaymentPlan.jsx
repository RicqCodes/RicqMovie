import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import {
  PaymentContainer,
  MainContainer,
  SkipButton,
} from "../styles/PaymentPlan.styled";
import { paymentPlan } from "../data/paymentData";
import PlanCard from "./PlanCard";

const PaymentPlan = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/browse");
  };

  const planDetails = paymentPlan.map((plan, id) => {
    return <PlanCard key={id} data={plan} />;
  });
  return (
    <>
      <Header />
      <PaymentContainer>
        <MainContainer>{planDetails}</MainContainer>
        <SkipButton>
          <button onClick={onClick}>Subscribe Later</button>
        </SkipButton>
      </PaymentContainer>
      <Footer />
    </>
  );
};

export default PaymentPlan;
