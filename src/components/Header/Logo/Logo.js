import React from "react";
import logo from "../../../img/logo.svg";
import styled from "styled-components";

const Div = styled.div`
  height: 100px;
  width: 100px;

  img {
    height: 100px;
    width: 100px;
  }
`;

const Logo = () => {
  return (
    <Div>
      <img src={logo}></img>
    </Div>
  );
};

export default Logo;
