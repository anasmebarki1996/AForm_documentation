import React, { useState } from 'react';

const Radio = (props) => {
  const { error, label } = props;

  return (
    <>
      <label className="form-label">{label}</label>
      <input className={error ? 'form-check-input is-invalid' : 'form-check-input'} {...props} />
      <div className="invalid-feedback">{error}</div>
    </>
  );
};

export default Radio;
