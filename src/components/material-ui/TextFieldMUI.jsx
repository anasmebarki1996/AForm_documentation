import { TextField } from '@mui/material';
import React from 'react';
const TextFieldMUI = (props) => {
  const { error, label, variant = 'outlined' } = props;
  return <TextField {...props} label={label} variant={variant} helperText={error} />;
};

export default TextFieldMUI;
