import { useState, useEffect } from 'react';
import Field from './Field';
import { inputConfirmationValidator, inputValidator } from './Validation';

export const FormState = (form, submitFunction) => {
  const [ready, setReady] = useState(false);

  const initForm = (form) => {
    let formValues = {};
    let inputValidation = {};
    for (const key in form) {
      formValues = { ...formValues, [key]: form[key].defaultValue };
      inputValidation = { ...inputValidation, [key]: form[key].validate };
    }

    const inputValues = { ...formValues };
    let inputHasErrors = {};
    let inputVisited = {};

    for (const key in formValues) {
      inputHasErrors = {
        ...inputHasErrors,
        [key]: form[key].defaultValue ? inputValidator(key, inputValidation[key], formValues[key]) : '',
      };

      inputVisited = {
        ...inputHasErrors,
        [key]: toString(formValues[key]) ? true : false,
      };
    }

    return {
      inputValues: { ...inputValues },
      inputHasErrors: { ...inputHasErrors },
      inputVisited: { ...inputVisited },
      formIsValid: false,
      inputValidation: { ...inputValidation },
    };
  };

  // formState is the data that we need
  const [formState, setFormState] = useState(initForm(form));
  // isSubmitting changes when we click on submit
  const [isSubmitting, setIsSubmitting] = useState(false);

  // inputChangeHandler activate when we type on input
  const inputChangeHandler = (inputIdentifier, value, hasError, visited) => {
    const updatedValues = {
      ...formState.inputValues,
      [inputIdentifier]: value,
    };

    const inputValidation = { ...formState.inputValidation };
    if (visited) {
      //@ts-ignore
      hasError = inputValidator(inputIdentifier, inputValidation[inputIdentifier], value);
      if (inputIdentifier.includes('_confirmation') && !hasError) {
        // @ts-ignore
        hasError = inputConfirmationValidator(
          inputIdentifier,
          value,
          // @ts-ignore
          formState.inputValues[inputIdentifier.split('_confirmation')[0]]
        );
      }
    }

    const updateHasErrors = {
      ...formState.inputHasErrors,
      [inputIdentifier]: hasError,
    };

    const updateVisited = {
      ...formState.inputVisited,
      [inputIdentifier]: visited,
    };

    let updatedFormIsValid = true;
    for (const key in updateHasErrors) {
      // @ts-ignore
      updatedFormIsValid = updatedFormIsValid && !updateHasErrors[key];
    }

    setFormState({
      inputValidation: inputValidation,
      inputValues: updatedValues,
      inputHasErrors: updateHasErrors,
      inputVisited: updateVisited,
      formIsValid: updatedFormIsValid,
    });
  };

  // inputChangeHandler activate when we exit the input to validate the data inserted
  const inputBlurHandler = (inputIdentifier) => {
    // @ts-ignore
    const value = formState.inputValues[inputIdentifier];
    // @ts-ignore
    const hasError = formState.inputHasErrors[inputIdentifier];
    inputChangeHandler(inputIdentifier, value, hasError, true);
  };

  // to check email and password validities if they are saved
  const formVerifyHandler = () => {
    const values = { ...formState.inputValues };
    const inputValidation = { ...formState.inputValidation };
    let errors = {},
      errorText;

    for (const key in values) {
      // @ts-ignore
      errorText = inputValidator(key, inputValidation[key], values[key]);
      if (key.includes('_confirmation') && !errorText) {
        // @ts-ignore
        errorText = inputConfirmationValidator(key, values[key], values[key.split('_confirmation')[0]]);
      }
      if (errorText) errors = { ...errors, [key]: errorText };
    }

    setFormState({
      ...formState,
      inputHasErrors: errors,
      formIsValid: Object.keys(errors).length ? false : true,
    });
  };

  // submit form
  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    formVerifyHandler();
  };

  const resetFormState = () => {
    let updatedValues = {};
    let updateHasErrors = {};
    let updateVisited = {};

    for (const key in form) {
      updatedValues = { ...updatedValues, [key]: '' };
      updateHasErrors = { ...updateHasErrors, [key]: '' };
      updateVisited = { ...updateVisited, [key]: false };
    }

    setFormState({
      ...formState,
      inputValues: updatedValues,
      inputHasErrors: updateHasErrors,
      inputVisited: updateVisited,
      formIsValid: false,
    });
  };

  useEffect(() => {
    const testFunction = async () => {
      if (isSubmitting === true && formState.formIsValid) {
        await submitFunction();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    };
    testFunction();
  }, [isSubmitting]);

  const updateFormState = (dataObject) => {
    setReady(true);
    setFormState((prevState) => {
      return {
        ...prevState,
        inputValues: dataObject,
      };
    });
  };

  const handleErrorsServer = (enteredErrors) => {
    let newErrors = {};
    for (const fieldName in formState.inputValues) {
      for (const enteredError of enteredErrors) {
        if (enteredError.includes(fieldName.toUpperCase())) {
          newErrors = { ...newErrors, [fieldName]: enteredError };
          break;
        }
      }
    }

    setFormState((prevState) => {
      return {
        ...prevState,
        inputHasErrors: newErrors,
      };
    });
  };

  const field = (fieldName, typeInput = 'text', defaultValue = '') => {
    return Field(fieldName, typeInput, defaultValue, formState, inputChangeHandler, inputBlurHandler, ready);
  };

  return {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler,
    resetFormState,
    updateFormState,
    handleErrorsServer,
    field,
    isSubmitting,
  };
};
