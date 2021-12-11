import { FormState } from '../formState/FormState';
import TextFieldMUI from '../components/material-ui/TextFieldMUI';

function MaterialUiInputs() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const inputValues = {
    firstName: { defaultValue: '', validate: { required: true } },
    lastName: { defaultValue: '', validate: { required: true } },
    email: {
      defaultValue: '',
      validate: { required: true, pattern: emailRegex },
    },
    password: { defaultValue: '', validate: { required: true } },
    password_confirmation: { defaultValue: '', validate: { required: true } },
  };

  const submitFunction = async () => {
    await new Promise((resolve) => {
      console.log('LOADING ...');
      setTimeout(resolve, 3000);
    });
    console.log('DONE');
  };

  const { submitHandler, isSubmitting, field } = FormState(inputValues, submitFunction);

  return (
    <div className="card container mt-5 p-5" onSubmit={submitHandler}>
      <form className="row g-3">
        <div className="col-md-6">
          <TextFieldMUI fullWidth label="Outlined" variant="outlined" {...field('lastName')} />
        </div>
        <div className="col-md-6">
          <TextFieldMUI fullWidth label="Outlined" variant="outlined" {...field('firstName')} />
        </div>
        <div className="col-md-12">
          <TextFieldMUI fullWidth type="email" label="email" {...field('email')} />
        </div>
        <div className="col-md-6">
          <TextFieldMUI fullWidth type="password" label="password" {...field('password')} />
        </div>
        <div className="col-md-6">
          <TextFieldMUI fullWidth type="password" label="password confirm" {...field('password_confirmation')} />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading ...' : ' Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MaterialUiInputs;
