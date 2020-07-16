import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  background-color: black;
  z-index: 5;
  height: 100px;
  font-family: "Source Serif Pro", serif;
  color: #838383;
  font-size: 14px;
  display: flex;
  justify-content: space-around;

  form {
    margin-left: 25%;
    margin-top: 30px;
  }

  input {
    margin-left: 10px;
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #838383;
    font-family: "Source Serif Pro", serif;
    color: #838383;

    outline: none;
  }

  input:nth-child(4) {
    background-color: #383838;
  }

  span {
    margin-top: 35px;
    font-family: "Source Serif Pro", serif;
  }

  span > span {
    color: #adc62c;
  }
`;

const Footer = () => {
  const followUs = "Follow us: ";

  return (
    <Div>
      <form>
        <span>{followUs}</span>
        <input type="text" placeHolder="Name" />
        <input type="phone" placeHolder="Phone" />
        <input type="button" value="Send" />
      </form>
      <span>
        Development by <span>Mango.agency</span>
      </span>
    </Div>
  );
};

export default Footer;
