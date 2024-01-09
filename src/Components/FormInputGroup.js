import { Col, Form, InputGroup } from 'react-bootstrap';
import classes from '../Styles/FormComponent.module.css';
import '../Styles/BuyNow.css';
import '../Styles/ScheduleADemo.css';
import '../Styles/LearnMore.css';

const FormInputGroup = (props) => {
    const {
        label,
        labelMsg,
        inputName,
        inputValue,
        handleChange,
        setFieldTouched,
        errors,
        touched,
        required,
        className
    } = props
    return (
      <Form.Group className="mb-3" >
        <Form.Label className={classes['form-label']}>{label}
        </Form.Label>
        <br /><span style={{ color: '#fff', fontSize: '12px' }}>{labelMsg}</span>
        <InputGroup>
          <Col lg={3} md={3} sm={3}>
            {props.children}
          </Col>
          <Col>
            <Form.Control
              required={required}
              name={inputName}
              value={inputValue}
              onChange={e => {
                handleChange(e)
                setFieldTouched(inputName, true)
              }}
              onBlur={() => setFieldTouched(inputName, true)}
              className={[className.FormInput]}
            />
          </Col>
        </InputGroup>
        {errors[inputName] && touched[inputName] ? (
          <div className={[className.InputError]}>{errors[inputName]}</div>
        ) : null}
    </Form.Group>
  )
}

export default FormInputGroup