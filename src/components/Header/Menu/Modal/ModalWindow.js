import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import vector from "../../../../img/vector.svg";
import modalFile from "../../../../img/modal/modalFile.svg";

const WindowModal = styled(Modal)`
  position: absolute;
  z-index: 1000;
  width: 350px;
  height: 300px;
  padding: 50px;

  top: 20%;
  left: 35%;

  background-color: black;

  font-family: "Source Serif Pro", serif;
  outline: none;

  box-shadow: 0 0 1000px 100px;

  * {
    margin-bottom: 10px;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
  }

  .radio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span {
    color: #ffffff;
    cursor: pointer;
    user-select: none;
    border: none;
    outline: none;
  }

  span:hover {
    color: #ccee1e;
  }

  input {
    border-radius: 20px;
    padding: 10px 80px 10px 20px;
    outline: none;
  }
  .text {
    color: #a7a7a7;
  }

  button.btn {
    padding: 15px 30px;
    border-radius: 30px;
    background: transparent;
    border: 1px solid #ccee1e;
    color: #ffffff;
    font-family: "Source Serif Pro", serif;
    outline: none;
  }

  button.btn:hover {
    background: linear-gradient(180deg, #e3ff53 0%, #adc62c 71%);
    color: black;
    transition: background 2s, color 1s;
  }

  .inputfile {
    width: 30px;
    height: 20px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1000;
    left: 20%;
  }

  .img {
    height: 60px;
  }

  div.modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  div.modal-header {
    display: flex;
    justify-content: flex-end;
  }
`;

const ModalWindow = (props) => {
  const { showModal, onHide } = props;
  console.log("puk");
  return (
    <WindowModal show={showModal} onHide={onHide}>
      <Modal.Header>
        <img src={vector} onClick={onHide} alt="" />
      </Modal.Header>
      <Modal.Body>
        <input type="text" placeHolder="Name" />
        <input type="phone" placeHolder="Phone" />
        <form className="radio">
          <p className="text">Your Age:</p>
          <span>
            <label for="10-20">10-20</label>
            <input type="radio" id="10-20" name="age" />
          </span>
          <span>
            <label for="20-30">20-30</label>
            <input type="radio" id="20-30" name="age" />
          </span>
          <span>
            <label for="30-40">30-40</label>
            <input type="radio" id="30-40" name="age" />
          </span>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <input type="file" name="file" id="file" className="inputfile" />
        <img for="file" className="img" src={modalFile} alt="" />
        <Button variant="primary" onClick={onHide}>
          Send
        </Button>
      </Modal.Footer>
    </WindowModal>
  );
};

export default ModalWindow;
