import React from "react";
import { Field, reduxForm, formValueSelector, Fields } from "redux-form";
import { connect } from "react-redux";
const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const email = value =>
  value && /[\w-]+@([\w-]+\.)+[\w-]/i.test(value)
    ? undefined
    : "Please Correct The Right Form Of Email";
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched &&
      ((error && <small className="text-danger">*{error}</small>) ||
        (warning && <small className="text-danger">*{warning}</small>))}
  </div>
);
const value = ["red", "blue", "green"];
let SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting, chooseColor } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderField}
          type="text"
          label="First Name"
          validate={[required]}
          className="ml-2"
        />
      </div>
      <div className="mt-2">
        <Field
          name="lastName"
          label="Last Name"
          component={renderField}
          type="text"
          placeholder="Last Name"
          className="ml-2"
        />
      </div>
      <div className="mt-2">
        <Field
          name="email"
          component={renderField}
          type="text"
          label="Email"
          validate={email}
          className="ml-2"
        />
      </div>
      <div className="mt-2">
        <Field
          name="color"
          component="select"
          type="text"
          label="Color"
          className="ml-2"
        >
          {value.map(color => {
            return <option value={color}>{color}</option>;
          })}
        </Field>
      </div>

      <button className="mt-2 ml-2 btn" type="submit">
        Submit
      </button>
      <button
        className="mt-2 btn"
        onClick={reset}
        disabled={pristine || submitting}
        type="button"
      >
        Reset
      </button>
      <div>{chooseColor}</div>
    </form>
  );
};
SimpleForm = reduxForm({ form: "simple" })(SimpleForm);
const selector = formValueSelector("simple");
SimpleForm = connect(state => {
  const chooseColor = selector(state, "color");
  return {
    chooseColor
  };
})(SimpleForm);
export default SimpleForm;
