import React from 'react';

const Input = (props) => {
  const { error, label } = props;
  return (
    <>
      <label className="form-label">{label}</label>
      <input className={error ? 'form-control is-invalid' : 'form-control'} {...props} />
      <div className="invalid-feedback">{error}</div>
    </>
  );
};

export default Input;
