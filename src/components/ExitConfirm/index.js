import React, { useState, useContext } from "react";
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

import { Context } from "../../provider/MainProvider";

const data = {
  left: {
    question: "Confirma a saída do veiculo da placa abaixo?",
    questionConfirmation: "LIBERAR SAÍDA",
    loading: "Confirmando…",
    done: "SAÍDA LIBERADA",
  },
  paid: {
    question: "Confima o pagamento da placa abaixo?",
    questionConfirmation: "CONFIRMAR",
    loading: "Confirmando…",
    done: "PAGO!",
  },
};

export default function ExitConfirm({ changeVisibility, type }) {
  const [actualContent, setActualContent] = useState(1);

  const { plate } = useContext(Context);

  function handleExit() {
    setActualContent(2);

    let options = {
      method: "POST",
      url:
        type === "left"
          ? `https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/out`
          : `https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/pay`,
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
          <p>{data[type].question}</p>
          <span>{plate}</span>

          <ConfirmButton onClick={handleExit}>
            {data[type].questionConfirmation}
          </ConfirmButton>

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
            <img src={Loading} alt={data[type].loading} />
            <p>{data[type].loading}</p>
          </LoadingWrapper>
        </Container>
      )}

      {actualContent === 3 && (
        <Container>
          <LoadingWrapper>
            <img src={Done} alt={data[type].done} />
            <p>{data[type].done}</p>
          </LoadingWrapper>
        </Container>
      )}
    </Overlay>
  );
}
