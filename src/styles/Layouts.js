import styled from "styled-components";

export const OuterLayout = styled.section`
  padding: 5rem 18rem;
  @media screen and (max-width: 1350px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1190px) {
    padding: 5rem 8rem;
  }

  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
`;

export const InnerLayout = styled.section`
  padding: 8rem 0;
`;
