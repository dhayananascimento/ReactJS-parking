import React, { useState } from "react";
import { Container, Input, PaymentButton, ExitButton } from "./styles";

export default function Exit() {
  const [text, setText] = useState("");
  const MAXLENGTH = 8;

  return (
    <Container>
      <label htmlFor="">Número da placa:</label>
      <Input
        type="text"
        placeholder="AAA-000"
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
