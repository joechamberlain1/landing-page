import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

const SecondaryButton = ({ name }) => {
  return (
    <SecondaryButtonStyled>
      {name}
      <img src={arrow} alt="" />
    </SecondaryButtonStyled>
  );
};

const SecondaryButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.6rem 2rem;
  border-radius: 20px;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    padding-left: 0.9rem;
  }
`;
export default SecondaryButton;
