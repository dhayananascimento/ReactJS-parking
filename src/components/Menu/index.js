import React from "react";
import { Container, List } from "./styles";

import Header from "../Header";

export default function Menu({ onChangleMenu, isOpen }) {
  return (
    <Container isOpen={isOpen}>
      <Header onChangleMenu={onChangleMenu} isMenuComponent />

      <List>
        <li>Entrada</li>
        <li>Saída</li>
      </List>
    </Container>
  );
}
