import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { Container, Row, Form } from 'react-bootstrap';
import {
  FormComponent,
  FormInputGroup
} from '../Components/ComponentIndex';
import { buyNowSchemas } from '../Components/Schemas/buyNowSchema';
import emailjs from '@emailjs/browser';
import CountryList from 'country-list-with-dial-code-and-flag';
import form from '../Data/form';
import classes from '../Styles/FormComponent.module.css';
import '../Styles/BuyNow.css';

const initialValue = {
  firstName: '',
  lastName: '',
  nursery: '',
  email: '',
  // address: '',
  // addressLine2: '',
  // city: '',
  // postCode: '',
  // county: '',
  // country: '',
  phoneNumber: '',
  countryCode: ''
};

// Email JS Keys
const emailJS_Service_key = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const emailJS_Template_Key = process.env.REACT_APP_EMAIL_JS_BUY_NOW;
const emailJS_Public_Key = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

const BuyNow = ({ setbuyNowFormIsValid }) => {
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
    validationSchema: buyNowSchemas,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      emailjs
        .send(
          emailJS_Service_key,
          emailJS_Template_Key,
          values,
          emailJS_Public_Key
        )
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
        try {
          setTimeout(() => {
          history.push('/buy-now-feedback');
          }, 2000);
          } catch (error) {
          console.log(error)
          }
      // try {
      //   await emailjs.send(emailJS_Service_key, emailJS_Template_Key, values, emailJS_Public_Key);
      //   resetForm()
      //   setbuyNowFormIsValid(true)
      //   setTimeout(() => {
      //     history.push('/shop');
      //   }, 2000);
      // } catch (error) {
      //   console.log(error)
      // }
      // console.log(emailSend)
    }
  });
  const properties = { handleChange, setFieldTouched, errors, touched };

  const validation = () => {
    if (
      values.firstName === '' ||
      values.lastName === '' ||
      values.nursery === '' ||
      values.email === ''
      // values.address === '' ||
      // values.city === '' ||
      // values.postCode === '' ||
      // values.county === '' ||
      // values.country === ''
    ) {
      return '/buy-now';
    }
    return '/shop';
  };

  return (
    <div className='buy-now-container'>
      <Container
        fluid
        className={`${classes['form-background']} pt-5 pb-3 my-5`}
      >
        <h1 className='buy-now-title'>Ready to start?</h1>
        <FormComponent
          inputValue={values}
          handleChange={handleChange}
          setFieldTouched={setFieldTouched}
          errors={errors}
          touched={touched}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          // submitButtonHidden={true}
          className={{
            formContainer: 'buy-now-form-container',
            firstName: 'buy-now-short-form-input',
            lastName: 'buy-now-short-form-input',
            nursery: 'buy-now-long-form-input',
            email: 'buy-now-long-form-input',
            ErrorMsg: 'buy-now-error-msg'
          }}
        >
          {/* <Row>
            <FormInput
              label='Address'
              labelMsg='(In order to deliver your tablets, can we please have your address?)'
              inputName='address'
              inputValue={values.address}
              inputId={values.address}
              {...properties}
              required={true}
              className={{
                FormInput: 'buy-now-long-form-input',
                InputError: 'buy-now-error-msg'
              }}
            />
          </Row>
          <Row>
            <FormInput
              inputName='addressLine2'
              inputValue={values.addressLine2}
              inputId={values.addressLine2}
              {...properties}
              className={{
                FormInput: 'buy-now-long-form-input'
              }}
            />
          </Row>
          <Row xs={1} sm={1} md={2}>
            <Col>
              <FormInput
                label='City'
                inputName='city'
                inputValue={values.city}
                inputId={values.city}
                {...properties}
                required={true}
                className={{
                  FormInput: 'buy-now-short-form-input',
                  InputError: 'buy-now-error-msg'
                }}
              />
            </Col>
            <Col>
              <FormInput
                label='Post Code'
                inputName='postCode'
                inputValue={values.postCode}
                inputId={values.postCode}
                {...properties}
                required={true}
                className={{
                  FormInput: 'buy-now-short-form-input',
                  InputError: 'buy-now-error-msg'
                }}
              />
            </Col>
          </Row>
          <Row>
            <FormInput
              label='County'
              inputName='county'
              inputValue={values.county}
              inputId={values.county}
              {...properties}
              className={{
                FormInput: 'buy-now-long-form-input'
              }}
            />
          </Row>
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
                FormDropDown: 'buy-now-form-dropdown',
                InputError: 'buy-now-error-msg'
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
          </Row> */}
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
                FormInput: 'buy-now-long-form-input',
                InputError: 'buy-now-error-msg'
              }}
            >
              <Form.Select
                value={values.countryCode}
                name='countryCode'
                onChange={handleChange}
                className={['buy-now-form-dropdown']}
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
          {/* <Link
              to={{
                pathname: '/shop',
                state: values
              }}
              className='btn btn-danger'
            >Next</Link> */}
          {/* </Row> */}
        </FormComponent>
      </Container>
      {form
        .filter((img) => img.form === 'buy-now')
        .map((Img) => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className='img-size' />
          </div>
        ))}
    </div>
  );
};

export default BuyNow;
