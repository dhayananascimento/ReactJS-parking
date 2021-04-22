import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--header);

  position: fixed;
  top: 0;

  transition: transform 0.5s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(100%)"};
`;

export const List = styled.ul`
  list-style: none;

  color: var(--white-text);
  font-size: 16px;

  li {
    padding: 25px 15px;
    cursor: pointer;
  }

  li:first-child {
    padding-top: 35px;
  }
`;
