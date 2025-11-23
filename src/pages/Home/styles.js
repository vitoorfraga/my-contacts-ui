import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`

export const Header = styled.header`
  
  display: flex;
  align-items: center;
  justify-content: ${({ hasError }) => hasError ? 'flex-end' : 'space-between'};

  margin-top: 32px;

  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};


  strong {
    font-size: 24px;
    color: #222;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all .2s ease-in;

    &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    }
  }
`

export const ListContainer = styled.div`
  margin-top: 24px;
`;

export const ListHeader = styled.header`
  margin-bottom: 8px;

  button {
    background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    .icon {
      transform: ${({ orderBy }) => orderBy === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)'};
      transition: transform .2s ease-in;
    }
`

export const Card = styled.div`
  background-color: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }
  

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {

    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: transparent;
      border: none;
    }
  }
`

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    outline: 0;
    padding: 0 16px;
  
    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 24px;
  }

  .details {
    
    strong {      
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
    
  }
  `