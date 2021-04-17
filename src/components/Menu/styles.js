import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4dd0e1;

  position: fixed;
  top: 0;
`;

export const List = styled.ul`
  list-style: none;

  color: #fff;
  font-size: 16px;

  li {
    padding: 25px 15px;
  }

  li:first-child {
    padding-top: 35px;
  }
`;
