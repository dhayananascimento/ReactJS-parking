import React from "react";
import { Container, List } from "./styles";

import Header from "../Header";

export default function Menu({ onChangeMenu, isOpen }) {
  return (
    <Container isOpen={isOpen}>
      <Header onChangeMenu={onChangeMenu} isMenuComponent />

      <List>
        <li>Entrada</li>
        <li>Saída</li>
      </List>
    </Container>
  );
}
