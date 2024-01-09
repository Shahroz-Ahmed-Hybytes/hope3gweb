import { Col, Form, Row, Button } from 'react-bootstrap';
import FormInput from './FormInput';
// import classes from '../Styles/FormComponent.module.css';
import form from '../Data/form';
import '../Styles/BuyNow.css';
import '../Styles/ScheduleADemo.css';
import '../Styles/LearnMore.css';

const FormComponent = (props) => {
  const {
    inputValue,
    handleChange,
    setFieldTouched,
    onSubmit,
    errors,
    touched,
    submitButtonHidden,
    formSubmitting,
    className
  } = props;
  const properties = { handleChange, setFieldTouched, errors, touched };
  return (
    <Form className={[className.formContainer]} onSubmit={onSubmit}>
      <Row xs={1} sm={1} md={2}>
        <Col>
          <FormInput
            label="First Name"
            inputName="firstName"
            inputValue={inputValue['firstName']}
            inputId={inputValue['firstName']}
            {...properties}
            required={true}
            className={{
              FormInput: [className.firstName],
              InputError: [className.ErrorMsg]
              }
            }
          />
          {/* <Field name="firstName" /> */}
        </Col>
        <Col>
          <FormInput
            label="Last Name"
            inputName="lastName"
            inputValue={inputValue['lastName']}
            inputId={inputValue['lastName']}
            {...properties}
            required={true}
            className={{
              FormInput: [className.lastName],
              InputError: [className.ErrorMsg]
              }
            }
          />
          {/* <Field name="lastName" /> */}
        </Col>
      </Row>
      <Row>
        <FormInput
          label="Name of Nursery"
          inputName="nursery"
          inputValue={inputValue['nursery']}
          inputId={inputValue['nursery']}
          {...properties}
          required={true}
          className={{
            FormInput: [className.nursery],
            InputError: [className.ErrorMsg]
            }
          }
        />
        {/* <Field name="{/* <Field name="nursery" /> */}
      </Row>
      <Row>
        <FormInput
          label="Email Address"
          inputName="email"
          inputValue={inputValue['email']}
          inputId={inputValue['email']}
          {...properties}
          required={true}
          className={{
            FormInput: [className.email],
            InputError: [className.ErrorMsg]
            }
          }
        />
      </Row>
      {props.children}
      <Row className={`${'form-button-body'} mt-3`}>
        {form.filter(img => img.id === "form_submit_button").map(Img => (
          <Button key={Img.id} id={Img.id} className="submit-button">
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </Button>
          )
        )}
      </Row>

      {/* <Row className={`${classes['form-button-body']} mt-3`}>
        <Button disabled={formSubmitting} hidden={submitButtonHidden} className={classes['form-button']} type="submit">
          Submit
        </Button>
      </Row> */}
    </Form>
  );
};
export default FormComponent;
