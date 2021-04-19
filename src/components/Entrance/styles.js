import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 279px;
  padding: 39px 16px 51px;

  display: flex;
  flex-direction: column;

  label {
    color: #9b9b9b;
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
    color: #4a4a4a;
    font-size: 16px;
    margin-top: 23px;
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
  font-size: 24px;
  text-align: center;

  margin-bottom: 5px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  background-color: #fffbe6;

  color: ${({ error }) => (error ? "#FF0068" : "#0A261D")};
`;

export const Button = styled.button`
  width: 100%;
  height: 67px;
  border: none;
  border-radius: 4px;
  margin-top: 8px;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  color: ${({ enable }) => (enable ? "#ffffff" : "#9B9B9B")};
  background-color: ${({ enable }) => (enable ? "#28DD91" : "#dadada")};
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  margin-top: 3px;
  margin-bottom: 8px;
  background-color: rgba(255, 23, 68, 0.15);

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
    color: #9b9b9b;
  }
`;
