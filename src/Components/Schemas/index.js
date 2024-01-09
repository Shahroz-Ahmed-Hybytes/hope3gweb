import * as yup from 'yup';

export const scheduleADemoSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Required"),
  lastName: yup
    .string()
    .required("Required"),
  nurseryName: yup
    .string()
    .required("Required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  country: yup
    .string()
    .required("Required"),
  phoneNumber: yup
    .number()
    .required("Required"),

});