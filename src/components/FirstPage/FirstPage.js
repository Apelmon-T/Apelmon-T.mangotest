import React, { useState } from "react";
import styled from "styled-components";
import arrowLeft from "../../img/firstPage/arrows/arrowLeft.svg";
import arrowRight from "../../img/firstPage/arrows/arrowRight.svg";
import grapeOne from "../../img/firstPage/grapeOne.svg";
import grapeTwo from "../../img/firstPage/grapeTwo.svg";
import grapeThree from "../../img/firstPage/grapeThree.svg";
import grapeFour from "../../img/firstPage/grapeFour.svg";
import bottle from "../../img/firstPage/bottle.svg";
import introGrape from "../../img/firstPage/introGrape.svg";
import sliderCenter from "../../img/firstPage/slider/sliderCenter.svg";
import sliderLeft from "../../img/firstPage/slider/sliderLeft.svg";
import sliderRight from "../../img/firstPage/slider/sliderRight.svg";

const Div = styled.div`
  div.slider {
    display: flex;
    height: 700px;
  }
  div.slider > img {
    width: 55%;
  }

  div.center-image > img:nth-child(2) {
    height: 650px;
    position: absolute;
    top: 165px;

    display: flex;
    justify-content: center;

    left: 50%;
    margin-left: -15%;
    z-index: 0;
  }

  div.center-image > img:nth-child(1) {
    height: 650px;
    position: absolute;
    top: 300px;
    display: flex;
    justify-content: center;

    left: 50%;
    margin-left: -5.5%;
    z-index: 1;
  }

  div.date {
    position: absolute;
    font-family: "Source Serif Pro", serif;
    z-index: 2;
    top: 580px;
    left: 8%;
  }

  span.day {
    font-size: 46px;
    color: #adc62c;
  }

  span.month {
    font-size: 24px;
    color: #818181;
  }

  div.arrows {
    position: absolute;
    top: 580px;
    right: 8.5%;
  }

  div.arrows > img:nth-child(1) {
    width: 35px;
  }

  div.arrows > img:nth-child(2) {
    width: 100px;
    padding-left: 20px;
  }

  div.grapes > img:nth-child(4) {
    position: absolute;
    height: 470px;
    top: 450px;
    left: 0;
    z-index: 1;
  }

  div.grapes > img:nth-child(3) {
    position: absolute;
    top: 100px;
    right: 0;
    z-index: 1;
  }

  div.grapes > img:nth-child(2) {
    position: absolute;
    top: 400px;
    right: 25%;
    z-index: 1;
  }

  div.grapes > img:nth-child(1) {
    position: absolute;
    top: 220px;
    left: 20%;
    z-index: 1;
  }

  div.text {
    font-family: "Source Serif Pro", serif;
    color: #ffffff;
  }

  h1 {
    font-weight: lighter;
    font-size: 46px;
    position: absolute;
    top: 300px;
    width: 50%;
    left: 25%;
    z-index: 3;
    text-align: center;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    font-style: italic;
    position: absolute;
    top: 370px;
    width: 30%;
    left: 35%;
    z-index: 3;
    text-align: center;
  }
`;

const FirstPage = () => {
  const [slides, setSlider] = useState([
    {
      header: "Explore the world of wine",
      textAboutUs:
        "Learn about the vast world of wine in a relaxed and fun atmosphere with other wine lovers and enthusiasts. Wine trails are suitable for those who are already in love with the world of wine and those who are just beginning to appreciate it.",
    },
    {
      header: "Lorem Ipsum",
      textAboutUs:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  const [currentPosition, setCurrentPosition] = useState(0);

  const prevSlide = () => {
    const resetToBack = currentPosition === 0;
    const index = resetToBack ? slides.length - 1 : currentPosition - 1;
    setCurrentPosition(index);
  };

  const nextSlide = () => {
    const resetToNext = currentPosition === slides.length - 1;
    const index = resetToNext ? 0 : currentPosition + 1;
    setCurrentPosition(index);
  };

  const activeSliderSourcesFromState = slides.slice(
    currentPosition,
    currentPosition + 1
  );
  const slideSourcesToDisplay =
    activeSliderSourcesFromState.length < 1
      ? [
          ...activeSliderSourcesFromState,
          ...slides.slice(0, 1 - activeSliderSourcesFromState.length),
        ]
      : activeSliderSourcesFromState;

  return (
    <Div>
      <div className="slider">
        <img src={sliderLeft} alt="" />
        <img src={sliderCenter} alt="" />
        <img src={sliderRight} alt="" />
      </div>
      <div className="date">
        <span className="day">01</span>
        <span className="month">/03</span>
      </div>
      <div className="grapes">
        <img src={grapeOne} alt="" />
        <img src={grapeTwo} alt="" />
        <img src={grapeThree} alt="" />
        <img src={grapeFour} alt="" />
      </div>
      <div className="center-image">
        <img src={bottle} alt="" />
        <img src={introGrape} alt="" />
      </div>
      <div className="text">
        {slideSourcesToDisplay.map((slide, index) => {
          return (
            <div key={index} className="slider_item">
              <h1>{slide.header}</h1>
              <p>{slide.textAboutUs}</p>
            </div>
          );
        })}
      </div>
      <div className="arrows">
        <img src={arrowLeft} alt="" onClick={prevSlide} />
        <img src={arrowRight} alt="" onClick={nextSlide} />
      </div>
    </Div>
  );
};

export default FirstPage;
