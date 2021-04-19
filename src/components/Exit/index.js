import React, { useState } from "react";
import { Container, Input, PaymentButton, ExitButton } from "./styles";

export default function Exit() {
  const [text, setText] = useState("");
  const MAXLENGTH = 8;

  return (
    <Container>
      <label htmlFor="text">Número da placa:</label>
      <Input
        id="text"
        type="text"
        placeholder="AAA-0000"
        maxLength={MAXLENGTH}
        onChange={(text) => setText(text.target.value)}
      />

      <PaymentButton
        disabled={!(text.length === MAXLENGTH)}
        enable={text.length === MAXLENGTH}
      >
        PAGAMENTO
      </PaymentButton>
      <ExitButton
        disabled={!(text.length === MAXLENGTH)}
        enable={text.length === MAXLENGTH}
      >
        SAÍDA
      </ExitButton>

      <a href="/">VER HISTÓRICO</a>
    </Container>
  );
}
