import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";

const CardSection = () => {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">One card for all payments</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, dignissimos veritatis aliquam qui quidem nobis aut
              deleniti cumque reiciendis ipsa?
            </p>
          </div>
          <div className="card-right">
            <img src={card} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
};

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .card-right {
      display: flex;
      justify-content: flex-end;
    }

    .card-left {
      p {
        padding: 1rem 0;
      }
    }
  }
`;

export default CardSection;
