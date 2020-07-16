import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styled from "styled-components";

const Div = styled.div`
  justify-content: space-between !important;
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  z-index: 2000;
  min-width: 320px;
  max-width: inherit;
  height: 125px;
`;

const Header = () => {
  return (
    <Div>
      <Logo />
      <Menu />
    </Div>
  );
};

export default Header;
