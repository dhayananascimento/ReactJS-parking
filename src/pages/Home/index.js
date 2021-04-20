import React, { useState } from "react";
import { Container } from "./styles";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Tabs from "../../components/Tabs";

export default function Home() {
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
    </Container>
  );
}
