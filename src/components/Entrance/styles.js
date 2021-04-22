import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 279px;
  padding: 39px 16px 51px;

  display: flex;
  flex-direction: column;

  label {
    color: var(--grey-text);
    font-size: 16px;
    margin-bottom: 7px;
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  height: 279px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 70px;
    height: 70px;
  }

  p {
    color: var(--black-text);
    font-size: 16px;
    margin-top: 23px;
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
  font-size: 24px;
  text-align: center;

  margin-bottom: 5px;
  border-radius: var(--border-radius);
  border: 1px solid var(--input-border);
  background-color: var(--input-background);

  color: ${({ error }) => (error ? "var(--red-text)" : "var(--input-text)")};
`;

export const Button = styled.button`
  width: 100%;
  height: 67px;
  border: none;
  border-radius: var(--border-radius);
  margin-top: 8px;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  color: ${({ enable }) => (enable ? "var(--white-text)" : "var(--grey-text)")};
  background-color: ${({ enable }) =>
    enable ? "var(--green-button)" : "var(--grey-button)"};
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 32px;
  border-radius: var(--border-radius);
  margin-top: 3px;
  margin-bottom: 8px;
  background-color: var(--error-background);

  display: flex;
  align-items: center;

  img {
    margin-left: 12px;
    width: 20px;
    height: 20px;
  }

  p {
    margin-left: 5px;
    font-size: 16px;
    color: var(--grey-text);
  }
`;
