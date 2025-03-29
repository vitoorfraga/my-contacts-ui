import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
`

export const Container = styled.div`
  background-color: #FFF;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, .4);
  max-width: 450px;
  width: 100%;

  h1 {
    font-size: 22px;
    color: ${({theme, danger }) => danger ? theme.colors.danger.main : theme.colors.gray[900]}
  }

  p {
    margin-top: 8px;
  }
`

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  .cancel-button {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    color: ${({theme}) => theme.colors.gray[200]};
  }
`