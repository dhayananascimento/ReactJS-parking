import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Button, List } from "./styles";

import Logo from "../../assets/avatar_parking.png";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";

import { Context } from "../../provider/MainProvider";

export default function Header({ changeMenuVisibility, isMenuComponent }) {
  const { setActualTab } = useContext(Context);
  const history = useHistory();

  function handleTab(actual) {
    setActualTab(actual);
    history.push("/");
  }

  return (
    <Container>
      <Button as={Link} to="/">
        <img src={Logo} alt="Logo" />
      </Button>

      <Button onClick={changeMenuVisibility}>
        <img src={isMenuComponent ? Close : Menu} alt="Menu" />
      </Button>

      <List>
        <li
          onClick={() => {
            handleTab(1);
          }}
        >
          Entrada
        </li>
        <li
          onClick={() => {
            handleTab(2);
          }}
        >
          Saída
        </li>
      </List>
    </Container>
  );
}
