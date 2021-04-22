import React, { useState } from "react";
import { Container, Main } from "./styles";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function Template({ children }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  window.addEventListener("resize", () => {
    setIsMenuVisible(false);
  });

  return (
    <Container>
      <Header changeMenuVisibility={handleMenu} />
      <Menu changeMenuVisibility={handleMenu} isVisible={isMenuVisible} />

      <Main>{children}</Main>
    </Container>
  );
}
