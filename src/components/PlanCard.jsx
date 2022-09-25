import React from "react";

import { PlanCardContainer, MainContainer } from "../styles/PlanCard.styled";

const PlanCard = ({ data }) => {
  return (
    <PlanCardContainer>
      <MainContainer>
        <h2>{data.planType}</h2>
        <ul>
          <li>{data.screen}</li>
          <li>{data.resolution}</li>
        </ul>
        <p>
          {data.price}
          <span>/Month</span>
        </p>

        <button>Subscribe</button>
      </MainContainer>
    </PlanCardContainer>
  );
};

export default PlanCard;
