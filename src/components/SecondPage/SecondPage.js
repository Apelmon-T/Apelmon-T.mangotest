import React from "react";
import styled from "styled-components";
import background from "../../img/secondPage/background/background.svg";
import grapeLeaf from "../../img/secondPage/grapeLeaf.svg";
import grapeLeafSecond from "../../img/secondPage/grapeLeafSecond.svg";
import grapeOne from "../../img/secondPage/grapeOne.svg";
import grapeTwo from "../../img/secondPage/grapeTwo.svg";
import grapeIntroOne from "../../img/secondPage/grapeIntroOne.svg";
import grapeIntroTwo from "../../img/secondPage/grapeIntroTwo.svg";

const Div = styled.div`
  img.background {
    width: 100%;
    box-shadow: 5px 100px 120px 10px rgba(0, 0, 0, 0.75);
  }

  img.grapeIntroOne {
    position: absolute;
    left: 0;
    top: 950px;
    height: 700px;
  }

  img.grapeIntroTwo {
    position: absolute;
    right: 0;
    top: 930px;
    height: 800px;
  }

  div.cirkle {
    position: absolute;
    top: 1200px;
    left: 39%;
    border: 1px solid #d9ff12;

    width: 300px;
    height: 300px;
    border-radius: 50%;
    z-index: 2;
  }

  div.date {
    border: 1px solid black;

    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: black;
    opacity: 0.7;
    z-index: 1;

    position: absolute;
    left: 20%;
    top: 20%;
  }

  div.year {
    font-size: 54px;
    font-family: "Source Serif Pro", serif;
    background: linear-gradient(180deg, #e3ff53 0%, #adc62c 71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #e3ff53;
    z-index: 2;

    text-align: center;
    padding-top: 50px;
  }

  img.grapeLeaf {
    position: absolute;
    top: 1350px;
    right: 31%;
  }

  img.grapeLeafSecond {
    position: absolute;
    top: 1130px;
    left: 29.5%;
  }

  img.grapeOne {
    position: absolute;
    top: 1250px;
    right: 23%;
  }

  img.grapeTwo {
    position: absolute;
    top: 1450px;
    left: 10%;
  }

  p {
    font-family: "Source Serif Pro", serif;
    color: #ffffff;
    font-size: 14px;
    font-style: italic;
    line-height: 25px;
    text-align: center;
    font-weight: lighter;

    width: 400px;

    position: absolute;
    top: 1400px;
    left: 35%;
    z-index: 4;
  }

  a {
    color: #ccee1e;
  }
`;

const SecondPage = () => {
  return (
    <Div>
      <img className="background" src={background} alt="" />
      <div>
        <div className="cirkle">
          <div className="date">
            <div className="year">1901</div>
          </div>
        </div>
        <p>
          Give the wine lover in your life a gift they will love.{" "}
          <a href="#">Wine trails</a> are a fun way of exploring the great food
          and wine venues we have in the city while making great memories.
        </p>
        <img className="grapeLeaf" src={grapeLeaf} alt="" />
        <img className="grapeLeafSecond" src={grapeLeafSecond} alt="" />
      </div>
      <img className="grapeOne" src={grapeOne} alt="" />
      <img className="grapeTwo" src={grapeTwo} alt="" />

      <img className="grapeIntroOne" src={grapeIntroOne} alt="" />
      <img className="grapeIntroTwo" src={grapeIntroTwo} alt="" />
    </Div>
  );
};

export default SecondPage;
