import React from "react";
import { Container, Button } from "./styles";

import Logo from "../../assets/avatar_parking.png";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";

export default function Header({ isMenuComponent }) {
  return (
    <Container>
      <Button>
        <img src={Logo} alt="Logo" />
      </Button>

      <Button>
        <img src={isMenuComponent ? Close : Menu} alt="Menu" />
      </Button>
    </Container>
  );
}
