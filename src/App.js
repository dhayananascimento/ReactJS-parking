import React from "react";

import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./components/Header";
import Menu from "./components/Menu";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  window.addEventListener("resize", () => {
    setIsOpenMenu(false);
  });

  return (
    <Container>
      <Header onChangleMenu={handleMenu} />
      <Menu onChangleMenu={handleMenu} isOpen={isOpenMenu} />

      <GlobalStyles />
    </Container>
  );
}

export default App;
