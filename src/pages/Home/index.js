import React, { useState } from "react";
import { Container } from "./styles";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Tabs from "../../components/Tabs";

export default function Home() {
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

      <Tabs />
    </Container>
  );
}
