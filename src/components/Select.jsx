import React from 'react';

const Select = (props) => {
  const { error, label, children } = props;
  return (
    <>
      <label className="form-label">{label}</label>
      <select className={error ? 'form-control is-invalid' : 'form-control'} {...props}>
        {children}
      </select>
      <div className="invalid-feedback">{error}</div>
    </>
  );
};

export default Select;
