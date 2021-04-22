import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Container,
  ContainerLoading,
  Button,
  Input,
  ErrorMessage,
} from "./styles";

import Loading from "../../assets/loading.png";
import RedAlert from "../../assets/ic_arlert.png";
import Done from "../../assets/round-done-button.png";

import { Context } from "../../provider/MainProvider";

export default function Entrance() {
  const { plate, setPlate } = useContext(Context);
  const [error, setError] = useState(false);

  const [actualContent, setActualContent] = useState(1);
  const MAXLENGTH = 8;

  async function handleEntrance(e) {
    e.preventDefault();
    setActualContent(2);

    let options = {
      method: "POST",
      url: "https://parking-lot-to-pfz.herokuapp.com/parking",
      headers: {
        "content-type": "application/json",
      },
      data: {
        plate,
      },
    };

    axios(options)
      .then(function () {
        setActualContent(3);
        setError(false);

        setTimeout(() => {
          setActualContent(1);
        }, 3 * 1000); //3 seconds
      })
      .catch(function () {
        setActualContent(1);
        setError(true);
      });
  }

  return (
    <>
      {actualContent === 1 && (
        <Container onSubmit={handleEntrance}>
          <label htmlFor="plate">Número da placa:</label>
          <Input
            id="plate"
            type="text"
            value={plate}
            placeholder="AAA-0000"
            maxLength={MAXLENGTH}
            onChange={(plate) => setPlate(plate.target.value)}
            error={error}
          />

          {error && (
            <ErrorMessage>
              <img src={RedAlert} alt="Red Alert" />
              <p>{"Erro ao registrar veículo."}</p>
            </ErrorMessage>
          )}

          <Button
            type="submit"
            disabled={!(plate.length === MAXLENGTH)}
            enable={plate.length === MAXLENGTH}
          >
            CONFIRMAR ENTRADA
          </Button>
        </Container>
      )}

      {actualContent === 2 && (
        <Container>
          <ContainerLoading>
            <img src={Loading} alt="Registrando..." />
            <p>Registrando...</p>
          </ContainerLoading>
        </Container>
      )}

      {actualContent === 3 && (
        <Container>
          <ContainerLoading>
            <img src={Done} alt="REGISTRADO!" />
            <p>REGISTRADO!</p>
          </ContainerLoading>
        </Container>
      )}
    </>
  );
}
