import React, { useContext } from "react";
import { TabWrapper, Tab, Content } from "./styles";
import Template from "../../components/Template";

import { Context } from "../../provider/MainProvider";

import Entrance from "../../components/Entrance";
import Exit from "../../components/Exit";

export default function Home() {
  const { actualTab, setActualTab } = useContext(Context);

  return (
    <Template>
      <TabWrapper>
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
      </TabWrapper>
    </Template>
  );
}
