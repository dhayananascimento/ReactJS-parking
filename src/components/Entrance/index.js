import React, { useState } from "react";
import { Container, Button, Input } from "./styles";

export default function Entrance() {
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

      <Button
        disabled={!(text.length === MAXLENGTH)}
        enable={text.length === MAXLENGTH}
      >
        CONFIRMAR ENTRADA
      </Button>
    </Container>
  );
}
