import { useState, useEffect } from "react";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";
import { ButtonContainer, Form } from "./styles";
import PropTypes from "prop-types";
import { isEmailValid } from "../../utils/isEmailValid";
import { useErrors } from "../../hooks/useErrors";
import { formatPhone } from "../../utils/formatPhone";
import CategoriesService from "../../services/CategoriesService";

export const ContactForm = ({ buttonLabel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");

  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const { addError, removeError, errors, getErrorMessageByName } = useErrors();

  const isFormValid = name && errors.length === 0;

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

  const handlePhoneChange = (event) => {
    setPhone(formatPhone(event.target.value));
  };

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Formulário enviado:", { name, email, phone: phone.replace(/\D/g, ""), option });
  };

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoadingCategories(true)
      try {
        const categoriesResonse = await CategoriesService.listCategories();
        setCategories(categoriesResonse);
        console.log(categoriesResonse);
      } catch {
        //
      } finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories();
  }, [])


  return (
    <Form onSubmit={handleSubmit} noValidate={false}>
      <FormGroup error={getErrorMessageByName("name")}>
        <Input
          placeholder="Nome *"
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
          type="email"
          maxLength={15}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByName("phone")}>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select placeholder="Nome" value={option} onChange={handleOptionChange} disabled={categories.length === 0}>
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button disabled={!isFormValid}>{buttonLabel}</Button>
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
