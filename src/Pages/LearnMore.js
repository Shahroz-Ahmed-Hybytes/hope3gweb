import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Container, Row, Form } from 'react-bootstrap';
import {
  FormComponent,
  FormDropDown,
  FormInputGroup
} from '../Components/ComponentIndex';
import { learnMoreSchema } from '../Components/Schemas/learnMoreSchema';
import UserFeedbackAlert from '../Components/userFeedbackAlert';
import CountryList from 'country-list-with-dial-code-and-flag';
import form from '../Data/form';
import classes from '../Styles/FormComponent.module.css';
import emailjs from '@emailjs/browser';
import '../Styles/LearnMore.css';

const initialValue = {
  firstName: '',
  lastName: '',
  nursery: '',
  email: '',
  country: '',
  phoneNumber: '',
  countryCode: ''
};
// Email JS Keys
const emailJS_Service_key = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const emailJS_Template_Key = process.env.REACT_APP_EMAIL_JS_LEARNMORE;
const emailJS_Public_Key = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

const LearnMore = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const history = useHistory();

  const {
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    isSubmitting
  } = useFormik({
    initialValues: initialValue,
    validationSchema: learnMoreSchema,
    onSubmit: (values) => {
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
          setAlertVisible(true);
        })
        .catch((err) => {
          console.error(err);
        });
      try{
        setTimeout(() => {
         history.push('/learn-more-feedback');
        }, 2000);
      } catch (error) {
        console.log(error)
    } }
  });
  const properties = { handleChange, setFieldTouched, errors, touched };

  return (
    <div className='learn-more-container'>
      <Container
        fluid
        className={`${classes['form-background']} pt-5 pb-3 my-5`}
      >
        <h1 className='learn-more-title'>Want to learn more?</h1>
        <FormComponent
          inputValue={values}
          handleChange={handleChange}
          setFieldTouched={setFieldTouched}
          errors={errors}
          touched={touched}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          className={{
            formContainer: 'learn-more-form-container',
            firstName: 'learn-more-short-form-input',
            lastName: 'learn-more-short-form-input',
            nursery: 'learn-more-long-form-input',
            email: 'learn-more-long-form-input',
            ErrorMsg: 'learn-more-error-msg'
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
                FormDropDown: 'learn-more-form-dropdown',
                InputError: 'learn-more-error-msg'
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
                FormInput: 'learn-more-long-form-input',
                InputError: 'learn-more-error-msg'
              }}
            >
              <Form.Select
                value={values.countryCode}
                name='countryCode'
                onChange={handleChange}
                className={['learn-more-form-dropdown']}
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
        </FormComponent>
      </Container>
      {form
        .filter((img) => img.form === 'learn-more')
        .map((Img) => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className='img-size' />
          </div>
        ))}
      {alertVisible && (
        <UserFeedbackAlert text='Thank you! Ziggy cannot wait to show you more.' />
      )}
    </div>
  );
};

export default LearnMore;
