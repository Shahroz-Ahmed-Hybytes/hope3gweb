import { Form } from 'react-bootstrap';
import classes from '../Styles/FormComponent.module.css';
import '../Styles/ScheduleADemo.css';

const FormDateTime = ({
  required,
  label,
  inputName,
  inputValue,
  handleChange,
  setFieldTouched,
  errors,
  touched,
  inputId,
  type,
  className
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className={classes['form-label']}>
        {label}
      </Form.Label>
      <Form.Control
        required={required}
        name={inputName}
        value={inputValue}
        id={inputId}
        type={type}
        onChange={(e) => {
          handleChange(e);
          setFieldTouched(inputName, true);
        }}
        onBlur={() => setFieldTouched(inputName, true)}
        className={`${[className.FormDateTime]} mb-2`}
      />
      {/* <Field name="address" /> */}
      {errors[inputName] && touched[inputName] ? (
        <div className={[className.InputError]}>
          {errors[inputName]}
        </div>
      ) : null}
    </Form.Group>
  );
};

export default FormDateTime;
