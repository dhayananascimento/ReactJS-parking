import React from "react";
import { useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Tabs from "./components/Tabs";

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
      <Header onChangeMenu={handleMenu} />
      <Menu onChangeMenu={handleMenu} isOpen={isOpenMenu} />

      <Tabs />

      <GlobalStyles />
    </Container>
  );
}

export default App;
