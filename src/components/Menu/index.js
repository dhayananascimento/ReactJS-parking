import React from "react";
import { Container, List } from "./styles";

import Header from "../Header";

export default function Menu() {
  return (
    <Container>
      <Header isMenuComponent />

      <List>
        <li>Entrada</li>
        <li>Saída</li>
      </List>
    </Container>
  );
}
