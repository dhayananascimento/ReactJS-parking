import React, { useContext } from "react";
import { Container, Tab, Content } from "./styles";

import Entrance from "../Entrance";
import Exit from "../Exit";

import { Context } from "../../provider/MainProvider";

export default function Tabs() {
  const { actualTab, setActualTab } = useContext(Context);

  return (
    <Container>
      <div>
        <Tab
          onClick={() => {
            setActualTab(1);
          }}
          active={actualTab === 1}
        >
          Entrada
        </Tab>
        <Tab
          onClick={() => {
            setActualTab(2);
          }}
          active={actualTab === 2}
        >
          Saída
        </Tab>
      </div>

      <Content>
        {actualTab === 1 && <Entrance />}
        {actualTab === 2 && <Exit />}
      </Content>
    </Container>
  );
}
