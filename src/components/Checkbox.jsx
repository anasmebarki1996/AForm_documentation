import React, { useState } from 'react';

const Checkbox = (props) => {
  const { error, label } = props;

  return (
    <div className="form-check">
      <label className="form-label">{label}</label>
      <input type="checkbox" className={error ? 'form-check-input is-invalid' : 'form-check-input'} {...props} />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Checkbox;
