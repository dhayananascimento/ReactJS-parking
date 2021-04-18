import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;
  padding: 36px 16px 20px;

  display: flex;
  flex-direction: column;

  label {
    color: #9b9b9b;
    font-size: 16px;
    margin-bottom: 7px;
  }

  a {
    color: #00bcd4;
    font-size: 15px;
    font-weight: 600;
    margin-top: 8px;
    text-align: center;
    text-decoration: none;
  }
`;

export const Input = styled.input`
  ::-webkit-input-placeholder {
    color: #9b9b9b;
  }

  :-moz-placeholder {
    color: #9b9b9b;
  }

  ::-moz-placeholder {
    color: #9b9b9b;
  }

  :-ms-input-placeholder {
    color: #9b9b9b;
  }

  height: 67px;
  width: 100%;
  color: #0a261d;
  font-size: 24px;
  text-align: center;
  border-radius: 8px;
  background-color: #fffbe6;
  border: 1px solid #cccccc;
  margin-bottom: 13px;
`;

const button = css`
  width: 100%;
  height: 67px;
  border: none;
  border-radius: 8px;
  margin-bottom: 13px;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const PaymentButton = styled.button`
  ${button}

  color: ${({ enable }) => (enable ? "#ffffff" : "#9B9B9B")};
  background-color: ${({ enable }) => (enable ? "#A769B2" : "#dadada")};
`;

export const ExitButton = styled.button`
  ${button}

  background-color: #fff;
  color: ${({ enable }) => (enable ? "#A769B2" : "#9B9B9B")};
  border: 2px solid ${({ enable }) => (enable ? "#A769B2" : "#dadada")};
`;
