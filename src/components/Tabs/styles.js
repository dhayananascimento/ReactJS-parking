import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 768px;
  margin: 41px auto;
`;

export const Tab = styled.button`
  width: 50%;
  height: 48px;

  cursor: pointer;
  font-size: 16px;

  border: none;
  border-radius: 4px 4px 0 0;

  color: ${({ active }) => (active ? "#4dd0e1" : "#9B9B9B")};
  background-color: ${({ active }) => (active ? "#fff" : "#f2f2f2")};
  border-bottom: 3px solid ${({ active }) => (active ? "#4dd0e1" : "#f2f2f2")};
`;

export const Content = styled.div`
  width: 100%;
  background-color: #fff;
`;
