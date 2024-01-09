
import * as yup from 'yup';

export const firstName = {
    firstName: yup.string().required("First name is required!")
}
export const lastName = {
    lastName: yup.string().required("Last name is required!")
}
export const nursery = {
    nursery: yup.string().required("Nursery is required!")
}
export const email = {
    email: yup.string().email("Please enter a valid email").required("Email is required!")
}
export const country = {
    country: yup.string()
        .required("Country is required!"),
}

export const phoneNumber = {
    phoneNumber: yup
        .string()
        .matches(/^[0-9]{1,45}$/, "Please enter number 0 - 9!")
        // .when("countryCode", {
        //     is: true,
        //     then: yup.string().required("Phone number is required!")
        // }),
}
export const countryCode = {
    country: yup.string()
        // .when("phoneNumber", {
        //     is: true,
        //     then: yup.string().required("Country Code is required!")
        // })
}
// export const password = {
//     password: yup.string().required().min(8)
// }
// export const address = {
//     address: yup.string().required("Address is required!")
// }
// export const postCode = {
//     postCode: yup.string().required("Post code is required!")
// }
// export const city = {
//     city: yup.string().required("City is required!")
// }
// export const county = {
//     county: yup.string().required("County is required!")
// }
