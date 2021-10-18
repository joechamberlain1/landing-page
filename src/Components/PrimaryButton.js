import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ name }) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background-color: var(--accent-pink);
  padding: 0.6rem 2rem;
  border-radius: 20px;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
`;

export default PrimaryButton;
