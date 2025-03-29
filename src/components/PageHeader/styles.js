import styled from "styled-components";

export const Container = styled.header`

  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    gap: 4px;

    color: ${({theme}) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;

    width: fit-content;

    padding: 4px;
  }

  h1 {
    font-size: 24px;
    font-weight: 900;
  }
`
