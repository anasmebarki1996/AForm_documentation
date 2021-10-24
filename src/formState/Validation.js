export const inputValidator = (field, validation, value) => {
  const { required, pattern, min, max, length } = validation;

  if (required && !value) {
    return "ERROR_" + field.toUpperCase() + "_REQUIRED";
  }
  if (required && value && Array.isArray(value) && !value.length) {
    return "ERROR_" + field.toUpperCase() + "_REQUIRED";
  }

  if (pattern) {
    const regex = new RegExp(pattern);
    return regex.test(value) ? "" : "ERROR_" + field.toUpperCase() + "_PATTERN";
  }
  if (min && value && value.length < min)
    return "ERROR_" + field.toUpperCase() + "_MIN";
  if (max && value && value.length > max)
    return "ERROR_" + field.toUpperCase() + "_MAX";
  if (length && value && value.length === length)
    return "ERROR_" + field.toUpperCase() + "LENGTH";
  return "";
};

export const inputConfirmationValidator = (
  fieldName,
  data,
  data_confirmation
) => {
  if (data_confirmation !== data) {
    return "ERROR_" + fieldName.toUpperCase() + "_CONFIRM";
  }
  return "";
};
