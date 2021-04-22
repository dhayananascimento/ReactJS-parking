import React, { useContext } from "react";
import { Container, List } from "./styles";

import { useHistory } from "react-router-dom";
import { Context } from "../../provider/MainProvider";

import Header from "../Header";

export default function Menu({ changeMenuVisibility, isVisible }) {
  const { setActualTab } = useContext(Context);
  const history = useHistory();

  function handleTab(actual) {
    setActualTab(actual);
    history.push("/");
    changeMenuVisibility();
  }

  return (
    <Container isVisible={isVisible}>
      <Header changeMenuVisibility={changeMenuVisibility} isMenuComponent />

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
