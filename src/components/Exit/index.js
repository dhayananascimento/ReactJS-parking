import React, { useState } from "react";
import { Container, Input, PaymentButton, ExitButton } from "./styles";

import Payment from "../Payment";
import ExitConfirm from "../ExitConfirm";

export default function Exit() {
  const [plate, setPlate] = useState("");
  const [payment, setPayment] = useState(false);
  const [exit, setExit] = useState(false);
  const MAXLENGTH = 8;

  return (
    <>
      <Container>
        <label htmlFor="plate">Número da placa:</label>
        <Input
          id="plate"
          type="text"
          value={plate}
          placeholder="AAA-0000"
          maxLength={MAXLENGTH}
          onChange={(plate) => setPlate(plate.target.value)}
        />

        <PaymentButton
          type="button"
          disabled={!(plate.length === MAXLENGTH)}
          enable={plate.length === MAXLENGTH}
          onClick={() => {
            setPayment(true);
          }}
        >
          PAGAMENTO
        </PaymentButton>

        <ExitButton
          type="button"
          disabled={!(plate.length === MAXLENGTH)}
          enable={plate.length === MAXLENGTH}
          onClick={() => {
            setExit(true);
          }}
        >
          SAÍDA
        </ExitButton>

        <a href="/">VER HISTÓRICO</a>
      </Container>

      {payment && <Payment plate={plate} changeVisibility={setPayment} />}

      {exit && <ExitConfirm plate={plate} changeVisibility={setExit} />}
    </>
  );
}
