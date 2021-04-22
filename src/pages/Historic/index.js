import React, { useContext, useState, useEffect } from "react";
import { HistoricWrapper, HeaderWrapper, DataWrapper } from "./styles";

import Template from "../../components/Template";
import { Context } from "../../provider/MainProvider";

import ArrowLeft from "../../assets/arrow_l.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Historic() {
  const { plate } = useContext(Context);
  const [data, setData] = useState([]);

  const history = useHistory();

  async function handleHistoric() {
    let options = {
      method: "GET",
      url: `https://parking-lot-to-pfz.herokuapp.com/parking/${plate}`,
    };

    axios(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // console.log(error)
      });
  }

  useEffect(() => {
    handleHistoric();
  }, []);

  return (
    <Template>
      <HistoricWrapper>
        <HeaderWrapper>
          <img
            src={ArrowLeft}
            alt="Back"
            onClick={() => {
              history.goBack();
            }}
          />
          <p>
            Placa <span>{plate}</span>
          </p>
        </HeaderWrapper>

        {data.map((item, index) => {
          const time = item.time.split(" ");
          const totalTime = [];

          if (item.left) {
            time.forEach((element, i) => {
              if (i % 2 === 0) totalTime.push(element);
              if (i === 1) {
                if (element === "minutes") {
                  totalTime.push("min");
                } else {
                  totalTime.push(element[0]);
                }
              }
            });
          } else {
            time.forEach((element, i) => {
              if (i % 2 === 0) totalTime.push(element);
              else {
                if (element === "minutes") {
                  totalTime.push("min");
                } else {
                  totalTime.push(element[0]);
                }
              }
            });
          }

          const key = `${index}-${item.plate}`;
          console.log(key);

          return (
            <DataWrapper key={key}>
              <div>
                <p>{item.left ? "Tempo total" : "Tempo Atual"}</p>
                <p>Pagamento</p>
              </div>

              <div>
                <strong>{totalTime.join("")}</strong>
                <strong>{item.paid ? "Pago" : "-"}</strong>
              </div>
            </DataWrapper>
          );
        })}
      </HistoricWrapper>
    </Template>
  );
}
