
import { Button } from "../Button"
import { FormGroup } from "../FormGroup"
import { Input } from "../Input"
import { Select } from "../Select"
import { ButtonContainer, Form } from "./styles"

export const ContactForm = ({ buttonLabel }) => {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome"/>
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail"/>
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone"/>
      </FormGroup>

      <FormGroup>
        <Select placeholder="Nome"/>
      </FormGroup>

      <ButtonContainer>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  )
}