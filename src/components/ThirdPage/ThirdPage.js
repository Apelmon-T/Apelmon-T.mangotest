import React from "react";
import styled from "styled-components";
import background from "../../img/thirdPage/background/background.svg";
import grape from "../../img/thirdPage/grape.svg";
import grapeLeaf from "../../img/thirdPage/grapeLeaf.svg";
import glassOne from "../../img/thirdPage/glassOne.svg";
import glassTwo from "../../img/thirdPage/glassTwo.svg";

const Div = styled.div`
  height: 800px;

  img.background {
    position: absolute;
    height: 400px;
    left: 20%;
    top: 1900px;
  }

  img.grapeLeaf {
    position: absolute;
    top: 1800px;
    left: 38%;
  }

  img.grape {
    position: absolute;
    top: 2000px;
    left: 39%;
    z-index: 2;
  }

  img.glassOne {
    position: absolute;
    left: 0;
    top: 2200px;

    height: 500px;
  }

  img.glassTwo {
    position: absolute;
    right: 0;
    top: 2100px;

    height: 650px;
  }

  h1 {
    font-family: "Source Serif Pro", serif;
    background: linear-gradient(180deg, #e3ff53 0%, #adc62c 71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #e3ff53;
    font-weight: lighter;

    margin-top: 350px;

    position: absolute;
    top: 1850px;
    left: 43%;
  }

  p {
    width: 600px;
    color: #ffffff;
    font-family: "Source Serif Pro", serif;
    font-size: 12px;
    font-style: italic;
    line-height: 25px;
    text-align: center;

    position: absolute;
    top: 2250px;
    left: 30%;
  }

  input {
    border: 1px solid #adc62c;
    background-color: transparent;
    border-radius: 30px;
    color: #ffffff;
    font-family: "Source Serif Pro", serif;
    padding: 15px 30px;

    position: absolute;
    top: 2450px;
    left: 45%;

    outline: none;
  }

  input:hover {
    background: linear-gradient(180deg, #e3ff53 0%, #adc62c 71%);

    color: black;
    transition: background 2s, color 1s;
  }
`;

const ThirdPage = () => {
  const head = `About region`;
  const text = `The climate and diversity of soils in the Stara Zagora region present
great opportunities for viticulture and winemaking. Our winery
benefits from fantastic geography and weather conditions that allow us
to grow both exotic international grapes as well as local traditional
grape varieties.`;
  return (
    <Div>
      <img className="background" src={background} alt="" />
      <div>
        <img className="grape" src={grape} alt="" />
        <img className="grapeLeaf" src={grapeLeaf} alt="" />
      </div>
      <div>
        <h1>{head}</h1>
        <p>{text}</p>
        <input type="button" value="Learn more" />
      </div>

      <img className="glassOne" src={glassOne} alt="" />
      <img className="glassTwo" src={glassTwo} alt="" />
    </Div>
  );
};

export default ThirdPage;
