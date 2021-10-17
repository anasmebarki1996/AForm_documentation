const Field = (
  fieldName: string,
  typeInput: string,
  defaultValue: string,
  formState: any,
  inputChangeHandler: Function,
  inputBlurHandler: Function,
  ready: boolean
) => {
  if (typeInput === 'file') {
    return {
      name: fieldName,
      // @ts-ignore
      error: formState.inputHasErrors[fieldName],
      // @ts-ignore
      onChange: (e: any) => {
        // @ts-ignore
        inputChangeHandler(
          fieldName,
          e.target.files[0],
          // @ts-ignore
          formState.inputHasErrors[fieldName],
          // @ts-ignore
          formState.inputVisited[fieldName]
        );
      },
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
      ready: ready,
      // @ts-ignore
      defaultValue: formState.inputValues[fieldName],
    };
  } else if (typeInput === 'autoComplete') {
    return {
      name: fieldName,
      // @ts-ignore
      error: formState.inputHasErrors[fieldName],
      onChange: (e: any, v: any) => {
        // @ts-ignore
        inputChangeHandler(
          fieldName,
          v ? v.value : ' ',
          // @ts-ignore
          formState.inputHasErrors[fieldName],
          // @ts-ignore
          formState.inputVisited[fieldName]
        );
      },
      // @ts-ignore
      defaultValue: formState.inputValues[fieldName],
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
      multiple: false,
      ready: ready,
    };
  } else if (typeInput === 'multipleAutoComplete') {
    return {
      name: fieldName,
      // @ts-ignore
      error: formState.inputHasErrors[fieldName],
      onChange: (e: any, v: any) => {
        // @ts-ignore
        inputChangeHandler(
          fieldName,
          v.map((value: any) => value.value),
          // @ts-ignore
          formState.inputHasErrors[fieldName],
          // @ts-ignore
          formState.inputVisited[fieldName]
        );
      },
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
      // @ts-ignore
      defaultValue:
        // @ts-ignore
        formState.inputValues[fieldName] &&
        // @ts-ignore
        Array.isArray(formState.inputValues[fieldName])
          ? // @ts-ignore
            [...formState.inputValues[fieldName]]
          : null,
      multiple: true,
      ready: ready,
    };
  } else if (typeInput === 'checkbox') {
    return {
      name: fieldName,
      // @ts-ignore
      error: formState.inputHasErrors[fieldName],
      type: 'checkbox',
      checked: formState.inputValues[fieldName],
      defaultChecked: false,
      onClick: () => {
        // @ts-ignore
        inputChangeHandler(
          fieldName,
          !formState.inputValues[fieldName],
          formState.inputHasErrors[fieldName],
          formState.inputVisited[fieldName]
        );
      },
    };
  } else if (typeInput === 'radio') {
    return {
      name: fieldName,
      type: 'radio',
      checked: defaultValue === formState.inputValues[fieldName],
      onChange: (e: any) => {
        // @ts-ignore
        inputChangeHandler(fieldName, e.target.value, formState.inputHasErrors[fieldName], formState.inputVisited[fieldName]);
      },
      value: defaultValue,
      error: formState.inputHasErrors[fieldName],
    };
  } else {
    return {
      name: fieldName,
      // @ts-ignore
      error: formState.inputHasErrors[fieldName],
      // @ts-ignore
      value: formState.inputValues[fieldName],
      onChange: (e: any) => {
        // @ts-ignore
        inputChangeHandler(fieldName, e.target.value, formState.inputHasErrors[fieldName], formState.inputVisited[fieldName]);
      },
      onBlur: () => {
        inputBlurHandler(fieldName);
      },
    };
  }
};

export default Field;
