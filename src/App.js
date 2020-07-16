import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import Footer from "./components/Footer/Footer";

const Div = styled.div`
  background-color: #383838;
`;

function App() {
  return (
    <Div>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <Footer />
    </Div>
  );
}

export default App;
