import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <Container>
      <Introduction />
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  /* background: #ECC8AF; */
  /* background: whitesmoke; */
  background: #f2e9e4;
  height: 100vh;
`;
export default App;

