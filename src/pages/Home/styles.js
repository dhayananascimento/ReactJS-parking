import styled from "styled-components";

export const TabWrapper = styled.div`
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
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  color: ${({ active }) => (active ? "var(--tab-text)" : "var(--grey-text)")};
  background-color: ${({ active }) =>
    active ? "var(--white-background)" : "var(--background)"};
  border-bottom: 3px solid
    ${({ active }) => (active ? "var(--tab-border)" : "var(--background)")};
`;

export const Content = styled.div`
  width: 100%;
  background-color: var(--white-background);
`;
