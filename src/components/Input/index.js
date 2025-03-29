import styled from "styled-components";

export const Input =  styled.input`
  background-color: red;

  background-color: #FFF;
  height: 52px;
  box-shadow: 0px, 4px, 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  border: none;
  outline: none;

  padding: 0 16px;

  font-size: 16px;

  border: 2px solid transparent;

  &:focus {
    border: 2px solid ${({theme}) => theme.colors.primary.main};
  }
`