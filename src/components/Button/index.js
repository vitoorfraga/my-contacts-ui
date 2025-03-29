import styled, { css } from "styled-components";

export const Button = styled.button`

  padding: 0 16px;
  height: 52px;

  border: none;

  background-color: ${({theme}) => theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px, 4px, 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #FFF;
  border-radius: 4px;

  transition:  background .2s ease-in;

  &:hover {
    background-color: ${({theme}) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #CCC;
    cursor: not-allowed;
  }

  ${({theme, danger}) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background-color: ${theme.colors.danger.light};
      /* background-color: green; */
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }

  `}
`