import { FormState } from '../formState/FormState';
import Input from '../components/Input';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';

function BootstrapInputs() {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;
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
    gender: { defaultValue: '', validate: { required: true } },
    agree: { defaultValue: true, validate: { required: true } },
    degree: { defaultValue: '', validate: { required: true } },
  };

  const submitFunction = () => {
    alert('done');
  };

  const { submitHandler, resetFormState, loading, field, handleErrorsServer } = FormState(inputValues, submitFunction);

  return (
    <div className="container mt-5" onSubmit={submitHandler}>
      <form className="row g-3">
        <div className="col-md-4">
          <Input type="text" label="first name" {...field('firstName')} />
        </div>
        <div className="col-md-4">
          <Input type="text" label="last name" {...field('lastName')} />
        </div>
        <div className="col-md-4">
          <Input type="email" label="email" {...field('email')} />
        </div>
        <div className="col-md-6">
          <Input type="password" label="password" {...field('password')} />
        </div>{' '}
        <div className="col-md-6">
          <Input type="password" label="password confirm" {...field('password_confirmation')} />
        </div>
        <div className="col-md-3">
          <Select label="password confirm" {...field('gender')}>
            <option selected disabled value="">
              select gender ...
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </Select>
        </div>
        <div className="col-12">
          <label className="form-label">Degree </label>
          <div className="form-check form-check-inline">
            <Radio type="radio" {...field('degree', 'radio', 'option1')} label="BSc" />
          </div>
          <div className="form-check form-check-inline">
            <Radio type="radio" {...field('degree', 'radio', 'option2')} label="MSc" />
          </div>
          <div className="form-check form-check-inline">
            <Radio type="radio" {...field('degree', 'radio', 'option3')} label="PHd" />
          </div>
        </div>
        <div className="col-12">
          <Checkbox type="checkbox" label="agree terms & conditions" {...field('agree', 'checkbox')} />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default BootstrapInputs;
