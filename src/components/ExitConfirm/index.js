import React, { useState } from "react";
import axios from "axios";
import {
  Overlay,
  Container,
  LoadingWrapper,
  ConfirmButton,
  BackButton,
} from "./styles";

import Loading from "../../assets/loading.png";
import Done from "../../assets/round-done-button.png";

export default function ExitConfirm({ plate, changeVisibility }) {
  const [actualContent, setActualContent] = useState(1);

  function handleExit() {
    setActualContent(2);

    let options = {
      method: "POST",
      url: `https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/out`,
    };

    axios(options)
      .then(function () {
        setActualContent(3);

        setTimeout(() => {
          changeVisibility(false);
        }, 3 * 1000); //3 seconds
      })
      .catch(function () {
        changeVisibility(false);
        // alert("Operação não realizada;");
      });
  }

  return (
    <Overlay>
      {actualContent === 1 && (
        <Container>
          <p>Confirma a saída do veiculo da placa abaixo?</p>
          <span>{plate}</span>

          <ConfirmButton onClick={handleExit}>LIBERAR SAÍDA</ConfirmButton>

          <BackButton
            onClick={() => {
              changeVisibility(false);
            }}
          >
            Voltar
          </BackButton>
        </Container>
      )}

      {actualContent === 2 && (
        <Container>
          <LoadingWrapper>
            <img src={Loading} alt="Imagem registrando" />
            <p>Confirmando…</p>
          </LoadingWrapper>
        </Container>
      )}

      {actualContent === 3 && (
        <Container>
          <LoadingWrapper>
            <img src={Done} alt="Imagem registrando" />
            <p>SAÍDA LIBERADA</p>
          </LoadingWrapper>
        </Container>
      )}
    </Overlay>
  );
}
