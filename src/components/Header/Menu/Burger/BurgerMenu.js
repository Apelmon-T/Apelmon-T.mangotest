import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../../../img/logoForBurger.svg";
import vector from "../../../../img/vector.svg";

const Navi = styled(Nav)`
  background-color: #111111;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(240%)" : "translate(350%)")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 30%;
  transition: transform 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;

  div > img {
    margin-top: 20px;
    margin-left: -75%;
    margin-bottom: 0;
  }

  a {
    font-weight: 900;
    margin-bottom: 30px;
  }

  p {
    font-weight: 900;
    color: #787878;
    margin-bottom: 20px;
  }

  div.media {
    font-size: 14px;
    margin-top: 200px;
  }
`;

const BurgerMenu = ({ open, showMenu }) => {
  return (
    <Navi open={open}>
      <div onClick={() => showMenu(!open)}>
        <img src={vector} alt="" />
      </div>
      <Navbar.Brand>
        <img src={logo} alt="" />
      </Navbar.Brand>
      <a href="#">About us</a>
      <a href="#">History</a>
      <a href="#">Region & Wine</a>
      <a href="#">Our products</a>
      <a href="#">News</a>
      <a href="#">Contacts</a>
      <div className="media">
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </div>
    </Navi>
  );
};

export default BurgerMenu;
