import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import avatar1 from "../img/avatar1.svg";
import avatar2 from "../img/avatar2.svg";
import avatar3 from "../img/avatar3.svg";
import avatar4 from "../img/avatar4.svg";
import avatar5 from "../img/avatar5.svg";
import conversation from "../img/conversation.svg";
import bgCircles from "../img/circleBg.svg";

const MessagingSection = () => {
  return (
    <MessageStyle>
      <InnerLayout>
        <div className="message-container">
          <div className="left-items">
            <h2 className="secondary-heading">
              We support you in 5 different languages
            </h2>
            <p className="message-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              facere excepturi nihil possimus ipsum laborum hic, error tenetur,
              dignissimos nulla ipsa est reiciendis.
            </p>
            <div className="images-container">
              <img src={avatar1} alt="" className="image-1" />
              <img src={avatar2} alt="" className="image-2" />
              <img src={avatar3} alt="" className="image-3" />
              <img src={avatar4} alt="" className="image-4" />
              <img src={avatar5} alt="" className="image-5" />
              <p>&nbsp; +1234</p>
            </div>
            <img src={bgCircles} alt="" className="bgCircle" />
          </div>
          <div className="right-items">
            <img src={conversation} alt="" />
            <img src={bgCircles} alt="" className="bgCircle" />
          </div>
        </div>
      </InnerLayout>
    </MessageStyle>
  );
};

const MessageStyle = styled.section`
  .message-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 990px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .left-items {
    padding-right: 2rem;
    position: relative;
    .message-paragraph {
      padding: 1rem 0;
    }
    .images-container {
      display: flex;
      align-items: center;

      .image-2,
      .image-3,
      .image-4,
      .image-5 {
        margin-left: -22px;
      }
    }
    .bgCircle {
      position: absolute;
      top: -7%;
      left: -10%;
      z-index: -1;
    }
  }
  .right-items {
    position: relative;
    img {
      padding-left: 2rem;
    }
    .bgCircle {
      position: absolute;
      bottom: -7%np;
      right: -10%;
      z-index: -1;
    }
  }
`;

export default MessagingSection;
