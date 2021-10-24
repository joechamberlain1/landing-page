import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from "../img/phone.svg";
import ring1 from "../img/ring_orange.svg";
import message1 from "../img/message_pink.svg";
import message2 from "../img/message_blue.svg";

const HeaderContent = () => {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>SMART BANKING FOR FREELANCERS</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, exercitationem ab qui, nihil ducimus sit laboriosam
            voluptas dolore tempora iure tenetur molestiae sunt quis sed id
            fugit ea animi asperiores.
          </p>
          <SecondaryButton name="Register Now" />
        </div>
      </div>
      <div className="right-content">
        <img className="phone" src={phone} alt="" />
        <img className="ring1" src={ring1} alt="" />
        <img className="message1" src={message1} alt="" />
        <img className="message2" src={message2} alt="" />
      </div>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    h1 {
      font-size: 4rem;
      font-weight: 900;

      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }
    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
      color: white;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: moveTwo 10s infinite;
      transition: all 4s ease-in-out;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      animation: move 5s infinite;
      transition: all 4s ease-in-out;
    }
    .message2 {
      position: absolute;
      left: 0;
      right: auto;
      bottom: 15%;
      animation: move 5s infinite;
      animation-delay: 0.5s;
      transition: all 8s ease-in-out;
    }
    .phone {
      width: 80%;
    }
  }

  //header animtaions

  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
    }
    @keyframes moveTwo {
      0% {
        transform: rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: rotate(360deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: rotate(0) scale(1) translateX(0);
      }
    }
  }
`;
export default HeaderContent;
