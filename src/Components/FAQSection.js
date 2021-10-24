import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import lines from "../img/lines.svg";
import questions from "../questions";
import Question from "./Question";

const FAQSection = () => {
  return (
    <FaqStyled>
      <InnerLayout>
        <h3 className="small-heading">
          Frequently <span>Asked Questions</span>
        </h3>
        <p className="c-para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ipsa
          minima, explicabo veniam ullam nisi vel eius aperiam voluptatem, hic
          illo amet facilis tenetur?
        </p>
        <div className="lines">
          <img src={lines} alt="" />
        </div>
        <div className="questions-con">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </InnerLayout>
    </FaqStyled>
  );
};

const FaqStyled = styled.section`
  .c-para {
    width: 60%;
    margin: 0 auto;
  }
  .questions-con {
    padding: 4rem 0;
  }
  .lines {
    position: absolute;
    left: 0;
    top: 300%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
    }
  }
`;

export default FAQSection;
