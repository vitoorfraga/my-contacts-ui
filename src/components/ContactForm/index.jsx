import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";
import { ButtonContainer, Form } from "./styles";
import PropTypes from "prop-types";

export const ContactForm = ({ buttonLabel }) => {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup error="O formato do email é invalido">
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select placeholder="Nome">
          <option value="1">Opção 1</option>
          <option value="2">Opção 2</option>
          <option value="3">Opção 3</option>
          <option value="4">Opção 4</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
};
ContactForm.defaultProps = {
  buttonLabel: "Enviar",
};

ContactForm.propTypes = {
  buttonLabel: PropTypes.string,
};
