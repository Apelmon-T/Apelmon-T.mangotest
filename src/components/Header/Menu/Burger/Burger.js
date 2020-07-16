import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import burger from "../../../../img/burger.svg";
import BurgerMenu from "./BurgerMenu";
import styled from "styled-components";

const Burger = () => {
  const Div = styled.div`
    img {
      padding: 10px;
      border: 1px solid white;
      border-radius: 25px;
      height: 20%;
      width: 40%;
      margin-top: -10px;
    }

    img:hover {
      border: 1px solid #adc62c;
      transition: border 1s;
    }
  `;

  const [open, showMenu] = useState(false);

  return (
    <>
      <Div onClick={() => showMenu(!open)}>
        <img src={burger} alt="" />
      </Div>
      <Nav>
        <BurgerMenu open={open} showMenu={showMenu} />
      </Nav>
    </>
  );
};

export default Burger;
