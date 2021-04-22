import styled from "styled-components";

export const HistoricWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 41px auto;
  padding: 14px 17px;
  background-color: var(--white-background);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 19px;

  img {
    width: 31.49px;
    height: 22.14px;
    cursor: pointer;
  }

  p {
    font-size: 24px;
    color: var(--blue-text);
    margin-left: 12.51px;

    span {
      text-transform: uppercase;
    }
  }
`;

export const DataWrapper = styled.div`
  margin-bottom: 16px;
  padding: 17px 15px;
  border: 1px solid var(--historic-border);
  border-radius: calc(var(--border-radius) * 2);
  box-shadow: 0 2px 2px 0 var(--historic-shadow);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-child {
      text-transform: uppercase;
      font-size: 16px;
      color: var(--grey-text);

      p:last-child {
        text-align: left;
        width: 100px;
      }
    }

    &:last-child {
      font-size: 24px;
      color: var(--historic-text);

      strong {
        padding-left: 3px;

        &:last-child {
          flex-shrink: 0;
          text-align: left;
          width: 100px;
        }
      }
    }
  }
`;
