export const formatPhone = (phoneNumber) => {
  return phoneNumber
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};
