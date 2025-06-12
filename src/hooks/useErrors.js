import { useState } from "react";

export const useErrors = () => {
  const [errors, setErrors] = useState([]);

  const addError = ({ field, message }) => {
    const errorAlreadyExists = errors.some((error) => error.field === field);

    if (errorAlreadyExists) return;

    setErrors((prevState) => [...prevState, { field, message }]);
  };

  const removeError = (field) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== field)
    );
  };

  const getErrorMessageByName = (field) => {
    const error = errors.find((error) => error.field === field);
    return error ? error.message : null;
  };

  return {
    errors,
    addError,
    removeError,
    getErrorMessageByName,
  };
};
