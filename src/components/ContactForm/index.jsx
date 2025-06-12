import { useState } from "react";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";
import { ButtonContainer, Form } from "./styles";
import PropTypes from "prop-types";
import { isEmailValid } from "../../utils/isEmailValid";
import { useErrors } from "../../hooks/useErrors";

export const ContactForm = ({ buttonLabel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");

  const { addError, removeError, errors, getErrorMessageByName } = useErrors();

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value) {
      addError({
        field: "name",
        message: "O nome é obrigatório.",
      });
    } else {
      removeError("name");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.some(
        (error) => error.field === "email"
      );

      if (errorAlreadyExists) return null;
      addError({
        field: "email",
        message: "O e-mail é inválido.",
      });
    } else {
      removeError("email");
    }
  };

  const handlePhoneChange = (event) => setPhone(event.target.value);

  const handleOptionChange = (event) => {
    setOption(event.target.value);
    if (!event.target.value) {
      addError({
        field: "option",
        message: "A opção é obrigatória.",
      });
    } else {
      removeError("option");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Formulário enviado:", { name, email, phone, option });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByName("name")}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByName("name")}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByName("email")}>
        <Input
          placeholder="E-mail"
          error={!!getErrorMessageByName("email")}
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByName("phone")}>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByName("option")}>
        <Select placeholder="Nome" value={option} onChange={handleOptionChange}>
          <option value="1">Categoria</option>
          <option value="2">Instagram</option>
          <option value="3">Facebook</option>
          <option value="4">Discord</option>
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
