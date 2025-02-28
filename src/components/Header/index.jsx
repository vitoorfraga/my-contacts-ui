import { Container, InputSearchContainer } from "./styles"
import logo from "./../../assets/images/my-contacts-logo.svg"


export const Header = () => {
  return (
      <Container>
        <img src={logo} alt="My Contacts" width="201"/>

        <InputSearchContainer>
        <input placeholder="Pesquisar contato"/>
        </InputSearchContainer>
      </Container>
  )
}