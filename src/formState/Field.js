const Field = (
  fieldName,
  typeInput,
  defaultValue,
  formState,
  inputChangeHandler,
  inputBlurHandler,
  ready
) => {
  if (typeInput === "file") {
    return {
      name: fieldName,
      error: formState.inputHasErrors[fieldName],
      onChange: (e) => {
        inputChangeHandler(
          fieldName,
          e.target.files[0],
          formState.inputHasErrors[fieldName],
          formState.inputVisited[fieldName]
        );
      },
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
      ready: ready,
      defaultValue: formState.inputValues[fieldName],
    };
  } else if (typeInput === "autoComplete") {
    return {
      name: fieldName,
      error: formState.inputHasErrors[fieldName],
      onChange: (e, v) => {
        inputChangeHandler(
          fieldName,
          v ? v.value : " ",
          formState.inputHasErrors[fieldName],
          formState.inputVisited[fieldName]
        );
      },
      defaultValue: formState.inputValues[fieldName],
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
      multiple: false,
      ready: ready,
    };
  } else if (typeInput === "multipleAutoComplete") {
    return {
      name: fieldName,
      error: formState.inputHasErrors[fieldName],
      onChange: (e, v) => {
        inputChangeHandler(
          fieldName,
          v.map((value) => value.value),
          formState.inputHasErrors[fieldName],
          formState.inputVisited[fieldName]
        );
      },
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
      defaultValue:
        formState.inputValues[fieldName] &&
        Array.isArray(formState.inputValues[fieldName])
          ? [...formState.inputValues[fieldName]]
          : null,
      multiple: true,
      ready: ready,
    };
  } else if (typeInput === "checkbox") {
    return {
      name: fieldName,
      error: formState.inputHasErrors[fieldName],
      type: "checkbox",
      checked: formState.inputValues[fieldName],
      defaultChecked: false,
      onClick: () => {
        inputChangeHandler(
          fieldName,
          !formState.inputValues[fieldName],
          formState.inputHasErrors[fieldName],
          formState.inputVisited[fieldName]
        );
      },
    };
  } else if (typeInput === "radio") {
    return {
      name: fieldName,
      type: "radio",
      checked: defaultValue === formState.inputValues[fieldName],
      onChange: (e) => {
        inputChangeHandler(
          fieldName,
          e.target.value,
          formState.inputHasErrors[fieldName],
          formState.inputVisited[fieldName]
        );
      },
      value: defaultValue,
      error: formState.inputHasErrors[fieldName],
    };
  } else {
    return {
      name: fieldName,
      error: formState.inputHasErrors[fieldName],
      value: formState.inputValues[fieldName],
      onChange: (e) => {
        inputChangeHandler(
          fieldName,
          e.target.value,
          formState.inputHasErrors[fieldName],
          formState.inputVisited[fieldName]
        );
      },
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
    };
  }
};

export default Field;
