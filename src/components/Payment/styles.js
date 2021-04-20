import styled from "styled-components";

export const Overlay = styled.form`
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 294px;
  max-width: 400px;
  background: #fff;

  padding: 32px 14px 28px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: #4a4a4a;
    font-size: 16px;
    margin-bottom: 3px;
    text-align: center;
  }

  span {
    color: #00bcd4;
    font-size: 38px;
    margin-bottom: 24px;
  }
`;

export const LoadingWrapper = styled.div`
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

export const ConfirmButton = styled.button`
  width: 100%;
  height: 67px;
  border: none;
  border-radius: 4px;
  margin-bottom: 24px;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  color: #fff;
  background-color: #a769b2;
`;

export const BackButton = styled.button`
  color: #00bcd4;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
