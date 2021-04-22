import styled from "styled-components";

export const DatailsWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 41px auto;
  padding: 14px 17px;
  border-radius: var(--border-radius);
  background-color: var(--white-background);

  p {
    font-size: 12px;
    margin-top: 25px;
    color: var(--grey-text);
    text-transform: uppercase;
  }

  span {
    font-size: 24px;
    color: var(--black-text);

    &.plate {
      color: var(--blue-text);
      font-size: 38px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 19px;

  img {
    width: 31.49px;
    height: 22.14px;
    cursor: pointer;
  }
`;
