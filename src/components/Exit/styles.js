import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;
  padding: 36px 16px 20px;

  display: flex;
  flex-direction: column;

  label {
    color: var(--grey-text);
    font-size: 16px;
    margin-bottom: 7px;
  }

  a {
    color: var(--blue-text);
    font-size: 15px;
    font-weight: 600;
    margin-top: 8px;
    text-align: center;
    text-decoration: none;
  }
`;

export const Input = styled.input`
  ::-webkit-input-placeholder {
    color: var(--grey-text);
  }

  :-moz-placeholder {
    color: var(--grey-text);
  }

  ::-moz-placeholder {
    color: var(--grey-text);
  }

  :-ms-input-placeholder {
    color: var(--grey-text);
  }

  height: 67px;
  width: 100%;
  color: var(--input-text);
  font-size: 24px;
  text-align: center;
  border-radius: var(--border-radius);
  background-color: var(--input-background);
  border: 1px solid var(--input-border);
  margin-bottom: 13px;
`;

const button = css`
  width: 100%;
  height: 67px;
  border: none;
  border-radius: var(--border-radius);
  margin-bottom: 13px;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const PaymentButton = styled.button`
  ${button}

  color: ${({ enable }) => (enable ? "var(--white-text)" : "var(--grey-text)")};
  background-color: ${({ enable }) =>
    enable ? "var(--purple-button)" : "var(--grey-button)"};
`;

export const ExitButton = styled.button`
  ${button}

  background-color: var(--white-button);
  color: ${({ enable }) =>
    enable ? "var(--purple-text)" : "var(--grey-text)"};
  border: 2px solid
    ${({ enable }) =>
      enable ? "var(--purple-border-button)" : "var(--grey-border-button)"};
`;
