import React, { useState } from "react";
import { Container, Input, PaymentButton, ExitButton } from "./styles";

import ExitConfirm from "../ExitConfirm";

export default function Exit() {
  const [plate, setPlate] = useState("");

  const [paid, setPaid] = useState(false);
  const [left, setLeft] = useState(false);

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
            setPaid(true);
          }}
        >
          PAGAMENTO
        </PaymentButton>

        <ExitButton
          type="button"
          disabled={!(plate.length === MAXLENGTH)}
          enable={plate.length === MAXLENGTH}
          onClick={() => {
            setLeft(true);
          }}
        >
          SAÍDA
        </ExitButton>

        <a href="/">VER HISTÓRICO</a>
      </Container>

      {paid && (
        <ExitConfirm type="paid" plate={plate} changeVisibility={setPaid} />
      )}

      {left && (
        <ExitConfirm type="left" plate={plate} changeVisibility={setLeft} />
      )}
    </>
  );
}
