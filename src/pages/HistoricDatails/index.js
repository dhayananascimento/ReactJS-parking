import React from "react";
import { DatailsWrapper, HeaderWrapper } from "./styles";
import { useHistory, useLocation } from "react-router-dom";

import Template from "../../components/Template";
import ArrowLeft from "../../assets/arrow_l.png";

export default function HistoricDetails() {
  const history = useHistory();
  const { item } = useLocation().state;

  return (
    <Template>
      <DatailsWrapper>
        <HeaderWrapper>
          <img
            src={ArrowLeft}
            alt="Back"
            onClick={() => {
              history.goBack();
            }}
          />
        </HeaderWrapper>

        <p>Placa</p>
        <span className="plate">{item.plate}</span>

        <p>Status</p>
        <span>{item.left ? "Não Estacionado" : "Estacionado"}</span>

        <p>{item.left ? "Tempo total" : "Tempo Atual"}</p>
        <span>{item.time}</span>

        <p>Pagamento</p>
        <span>{item.paid ? "Pago" : "-"}</span>
      </DatailsWrapper>
    </Template>
  );
}
