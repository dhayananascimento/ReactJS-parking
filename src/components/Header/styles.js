import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 768px)",
};

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: #4dd0e1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  cursor: pointer;

  border: none;
  padding: 10px;
  background-color: transparent;

  ${media.desktop} {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const List = styled.ul`
  display: none;
  list-style: none;

  color: #fff;
  font-size: 16px;

  li {
    padding: 25px 15px;
  }

  ${media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
