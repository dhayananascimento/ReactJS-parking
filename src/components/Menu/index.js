import React from "react";
import { Container, List } from "./styles";

import Header from "../Header";

export default function Menu({ changeMenuVisibility, isVisible }) {
  return (
    <Container isVisible={isVisible}>
      <Header changeMenuVisibility={changeMenuVisibility} isMenuComponent />

      <List>
        <li>Entrada</li>
        <li>Saída</li>
      </List>
    </Container>
  );
}
