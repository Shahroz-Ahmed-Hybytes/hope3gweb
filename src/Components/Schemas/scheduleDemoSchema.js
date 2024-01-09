import * as yup from 'yup';
import {
  country,
  countryCode,
  email,
  firstName,
  lastName,
  nursery,
  phoneNumber,
} from './schemas';

export const scheduleDemoSchema = yup.object().shape({
  ...firstName,
  ...lastName,
  ...nursery,
  ...email,
  ...country,
  ...phoneNumber,
  ...countryCode,
});
