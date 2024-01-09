import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Col, Container, Row, Form } from 'react-bootstrap';
import {
  FormComponent,
  FormDropDown,
  FormInputGroup,
  FormDateTime
} from '../Components/ComponentIndex';
import { scheduleDemoSchema } from '../Components/Schemas/scheduleDemoSchema';
import UserFeedbackAlert from '../Components/userFeedbackAlert';
import emailjs from '@emailjs/browser';
import CountryList from 'country-list-with-dial-code-and-flag';
import form from '../Data/form';
import classes from '../Styles/FormComponent.module.css';
import '../Styles/ScheduleADemo.css';

// Email JS Keys
const emailJS_Service_key = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const emailJS_Template_Key = process.env.REACT_APP_EMAIL_JS_SCHEDULE_DEMO;
const emailJS_Public_Key = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

const dateAndTimes = [
  {
    date1: '',
    fromTime1: '',
    toTime1: ''
  },
  {
    date2: '',
    fromTime2: '',
    toTime2: ''
  },
  {
    date3: '',
    fromTime3: '',
    toTime3: ''
  }
];
const [dateAndTime1, dateAndTime2, dateAndTime3] = dateAndTimes;
const properties = {
  firstName: '',
  lastName: '',
  nursery: '',
  email: '',
  country: '',
  phoneNumber: '',
  countryCode: ''
};

const initialValue = {
  ...properties,
  ...dateAndTime1,
  ...dateAndTime2,
  ...dateAndTime3
};

function ScheduleADemo() {
  const [alertVisible, setAlertVisible] = useState(false);
  const history = useHistory();


  const onSubmit = async (values, actions) => {
    // console.log('RESULTS','values: ', values, 'actions: ', actions);
    console.log('submitted', 'values: ', values);
    setAlertVisible(true);

    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
      actions.resetForm();
    });
  };

  const [formSubmitting, setFormSubmitting] = useState(false);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldTouched,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: initialValue,
    validationSchema: scheduleDemoSchema,
    onSubmit: async (values, { resetForm }) => {
      setFormSubmitting(true);
      console.log(values);
      emailjs
        .send(
          emailJS_Service_key,
          emailJS_Template_Key,
          values,
          emailJS_Public_Key
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      // const emailSend = await emailjs.send(emailJS_Service_key, emailJS_Template_Key, values, emailJS_Public_Key);
      // console.log(emailSend)
      // resetForm()
      setFormSubmitting(false);
      try {
        setTimeout(() => {
        history.push('/schedule-a-demo-feedback');
        }, 2000);
        } catch (error) {
        console.log(error)
        }
    }
  });

  const properties = { handleChange, setFieldTouched, errors, touched };

  return (
    <div className='schedule-demo-container'>
      <Container
        fluid
        className={`${classes['form-background']} pt-5 pb-3 my-5`}
      >
        <h1 className='schedule-demo-title'>Want to see how it works?</h1>
        <FormComponent
          inputValue={values}
          handleChange={handleChange}
          setFieldTouched={setFieldTouched}
          errors={errors}
          touched={touched}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          formSubmitting={formSubmitting}
          className={{
            formContainer: 'schedule-demo-form-container',
            firstName: 'schedule-demo-short-form-input',
            lastName: 'schedule-demo-short-form-input',
            nursery: 'schedule-demo-long-form-input',
            email: 'schedule-demo-long-form-input',
            ErrorMsg: 'schedule-demo-error-msg'
          }}
        >
          <Row>
            <FormDropDown
              label='Country'
              dropdownList={CountryList}
              itemName='name'
              filterName='United Kingdom'
              inputValue={values.country}
              inputName='country'
              {...properties}
              required={true}
              className={{
                FormDropDown: 'schedule-demo-form-dropdown',
                InputError: 'schedule-demo-error-msg'
              }}
            >
              <option selected disabled hidden value=''>
                -- Please Select --
              </option>
              <option>England</option>
              <option>Wales</option>
              <option>Scotland</option>
              <option>Northern Ireland</option>
              <option disabled>———————————————————————————————</option>
            </FormDropDown>
            {/* <Field name="email" /> */}
          </Row>
          <Row>
            <FormInputGroup
              label='Phone Number'
              labelMsg='(Please provide your number if you want us to call you)'
              inputName='phoneNumber'
              inputValue={values.phoneNumber}
              inputId={values.phoneNumber}
              {...properties}
              listTitle='Code'
              list={CountryList}
              required={false}
              className={{
                FormInput: 'schedule-demo-long-form-input',
                InputError: 'schedule-demo-error-msg'
              }}
            >
              <Form.Select
                value={values.countryCode}
                name='countryCode'
                onChange={handleChange}
                className={['schedule-demo-form-dropdown']}
              >
                <option selected disabled hidden value=''>
                  🌎
                </option>
                {CountryList.map((item, index) => (
                  <option
                    value={item.dial_code}
                    key={index}
                  >{`${item.flag} ${item.name} ${item.dial_code}`}</option>
                ))}
              </Form.Select>
            </FormInputGroup>
          </Row>
          <p className='availabilityText'>
            * Please provide your availability for a 30 minute demonstration. We
            appreciate as much flexibility as possible, so that we have time to
            accommodate everyone. (e.g. 9.00-18.00)
          </p>
          {dateAndTimes.map((dateAndTime, index) => {
            return (
              <Row xs={1} sm={1} md={3} lg={3} key={index}>
                <Col>
                  <FormDateTime
                    label='Date'
                    inputName={Object.keys(dateAndTime)[0]}
                    inputValue={values[Object.keys(dateAndTime)[0]]}
                    inputId={values[Object.keys(dateAndTime)[0]]}
                    type='date'
                    {...properties}
                    required={true}
                    className={{
                      FormDateTime: 'schedule-demo-short-form-input',
                      InputError: 'schedule-demo-error-msg'
                    }}
                  />
                </Col>
                <Col>
                  <FormDateTime
                    label='Start Time'
                    inputName={Object.keys(dateAndTime)[1]}
                    inputValue={values[Object.keys(dateAndTime)[1]]}
                    inputId={values[Object.keys(dateAndTime)[1]]}
                    type='time'
                    {...properties}
                    required={true}
                    className={{
                      FormDateTime: 'schedule-demo-short-form-input',
                      InputError: 'schedule-demo-error-msg'
                    }}
                  />
                </Col>
                <Col>
                  <FormDateTime
                    label='End Time'
                    inputName={Object.keys(dateAndTime)[2]}
                    inputValue={values[Object.keys(dateAndTime)[2]]}
                    inputId={values[Object.keys(dateAndTime)[2]]}
                    type='time'
                    {...properties}
                    required={true}
                    className={{
                      FormDateTime: 'schedule-demo-short-form-input',
                      InputError: 'schedule-demo-error-msg'
                    }}
                  />
                </Col>
              </Row>
            );
          })}
        </FormComponent>
      </Container>
      {form
        .filter((img) => img.form === 'schedule-demo')
        .map((Img) => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className='img-size' />
          </div>
        ))}
      {alertVisible && (
        <UserFeedbackAlert text='One of Ziggys helpers will be in contact with you soon!' />
      )}
    </div>
  );
}

export default ScheduleADemo;
