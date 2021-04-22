import styled from "styled-components";

export const Overlay = styled.form`
  background-color: var(--transparent-background);
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
  background-color: var(--white-background);

  padding: 32px 14px 28px;
  border-radius: var(--border-radius);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: var(--black-text);
    font-size: 16px;
    margin-bottom: 3px;
    text-align: center;
  }

  span {
    color: var(--blue-text);
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
    color: var(--black-text);
    font-size: 16px;
    margin-top: 23px;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 67px;
  border: none;
  border-radius: var(--border-radius);
  margin-bottom: 24px;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  color: var(--white-text);
  background-color: var(--purple-button);
`;

export const BackButton = styled.button`
  color: var(--blue-text);
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: var(--transparent-button);
`;
