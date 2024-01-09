import { Form } from 'react-bootstrap';
import classes from '../Styles/FormComponent.module.css';
import '../Styles/BuyNow.css';
import '../Styles/ScheduleADemo.css';
import '../Styles/LearnMore.css';

const FormInput = ({
  required,
  label,
  labelMsg,
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
        {required === true ? (
          <>
          {label} <span style={{ color: '#ff9900' }}>*</span>
          </>
          ) : (
          <>
            {label} 
          </>
          ) 
        }
      </Form.Label>
      <br /><span style={{ color: '#fff', fontSize: '12px' }}>{labelMsg}</span>
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
        className={`${[className.FormInput]} mb-2`}
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

export default FormInput;
