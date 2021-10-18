import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";
import chart from "../img/chart.svg";

const ChartSection = () => {
  return (
    <ChartStyled>
      <InnerLayout>
        <div className="chart-container">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name="Balance" amount="$250" />
                <ChartStats name="Last Transaction" amount="$1000" />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">
              Manage your finances like a pro
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              voluptatem ex magnam in necessitatibus ducimus possimus. Officia
              praesentium, optio quos ullam veniam ipsa recusandae eligendi?
            </p>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
};

const ChartStyled = styled.section`
  .chart-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .chart-left {
      width: 80%;
      .stats {
        img {
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 50px;
          width: 100%;
        }
        .stats-money {
          display: flex;
          padding-bottom: 1.3rem;
          justify-content: space-between;
        }
      }
    }
    .chart-right {
      padding-left: 2rem;
      p {
        padding: 1.3rem 0;
      }
    }
  }
`;

export default ChartSection;
