import React, { useState } from "react";
import Burger from "./Burger/Burger";
import styled from "styled-components";
import ModalWindow from "./Modal/ModalWindow";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 45%;
  height: 77px;

  font-family: "Roboto", sans-serif;
  line-height: 16px;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-top: 48px;

  a {
    text-decoration: none;
    font-weight: 900;
  }
  a:visited {
    color: #ffffff;
  }
  a:hover {
    font-size: 16px;
    transition: font-size 0.5s, color 1s;
    color: transparent;
    background: rgb(214, 255, 0);
    background: linear-gradient(
      180deg,
      rgba(214, 255, 0, 1) 0%,
      rgba(173, 198, 44, 1) 69%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }

  .overlay {
    position: absolute;
    z-index: 15;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }
`;

const Menu = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const openModal = () => setShowModal(true);

  return (
    <Nav>
      <a href="#">About us</a>
      <a href="#">History</a>
      <a href="#" onClick={openModal}>
        Call me plz
      </a>
      <ModalWindow showModal={showModal} onHide={handleClose} />
      <span>+35 987 654 32 10</span>
      <Burger />
    </Nav>
  );
};

export default Menu;
