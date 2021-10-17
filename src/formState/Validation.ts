export const inputValidator = (field: string, validation: any, value: string) => {
  const { required, pattern, min, max, length } = validation;

  if (required && !value) {
    console.log('ERROR_' + field.toUpperCase() + '_REQUIRED');
    return 'ERROR_' + field.toUpperCase() + '_REQUIRED';
  }
  if (required && value && Array.isArray(value) && !value.length) {
    return 'ERROR_' + field.toUpperCase() + '_REQUIRED';
  }

  if (pattern) {
    const regex = new RegExp(pattern);
    return regex.test(value) ? '' : 'ERROR_' + field.toUpperCase() + '_PATTERN';
  }
  if (min && value && value.length < min) return 'ERROR_' + field.toUpperCase() + '_MIN';
  if (max && value && value.length > max) return 'ERROR_' + field.toUpperCase() + '_MAX';
  if (length && value && value.length === length) return 'ERROR_' + field.toUpperCase() + 'LENGTH';
  return '';
};

export const inputConfirmationValidator = (fieldName: string, data: string, data_confirmation: string) => {
  if (data_confirmation !== data) {
    return 'ERROR_' + fieldName.toUpperCase() + '_CONFIRM';
  }
  return '';
};
