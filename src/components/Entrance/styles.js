import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  padding: 39px 16px 51px;

  display: flex;
  flex-direction: column;

  label {
    color: #9b9b9b;
    font-size: 16px;
    margin-bottom: 7px;
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

export const Button = styled.button`
  width: 100%;
  height: 67px;
  border: none;
  border-radius: 8px;
  margin-bottom: 13px;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  color: ${({ enable }) => (enable ? "#ffffff" : "#9B9B9B")};
  background-color: ${({ enable }) => (enable ? "#28DD91" : "#dadada")};
`;
