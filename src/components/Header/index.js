import React from "react";
import { Container, Button, List } from "./styles";

import Logo from "../../assets/avatar_parking.png";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";

export default function Header({ onChangeMenu, isMenuComponent }) {
  return (
    <Container>
      <Button>
        <img src={Logo} alt="Logo" />
      </Button>

      <Button onClick={onChangeMenu}>
        <img src={isMenuComponent ? Close : Menu} alt="Menu" />
      </Button>

      <List>
        <li>Entrada</li>
        <li>Saída</li>
      </List>
    </Container>
  );
}
