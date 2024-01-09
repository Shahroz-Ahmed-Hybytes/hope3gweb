import * as yup from 'yup';
import { firstName, lastName, nursery, email, countryCode,    phoneNumber } from './schemas';
// import { address, city, country, countryCode, email, firstName, lastName, nursery, phoneNumber, postCode } from './schemas';

export const buyNowSchemas = yup.object().shape({
    ...firstName,
    ...lastName,
    ...nursery,
    ...email,
    ...phoneNumber,
    ...countryCode,
    // ...country,
    // ...address,
    // ...postCode,
    // ...city
    // ...county
});