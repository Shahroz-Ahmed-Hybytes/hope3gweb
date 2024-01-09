import { Form } from 'react-bootstrap';
import classes from '../Styles/FormComponent.module.css';
import '../Styles/BuyNow.css';
import '../Styles/ScheduleADemo.css';
import '../Styles/LearnMore.css';

const FormDropDown = (props) => {
    const { label, dropdownList, itemName, filterName, errors, touched, inputName, inputValue, handleChange, className } = props
    return (
        <Form.Group className="mb-3" >
            {label && <Form.Label className={classes['form-label']}>
              {label} <span style={{ color: '#ff9900' }}>*</span>
            </Form.Label>}
            <Form.Select
                value={inputValue}
                name={inputName}
                // defaultValue={'default'}
                onChange={handleChange}
                className={[className.FormDropDown]}
            >
                {props.children}
                {
                    Array.isArray(dropdownList) &&
                    dropdownList.map((item, index) => (
                        item[itemName] !== filterName &&
                        <option key={index}>{item[itemName]}</option>
                    ))
                }
            </Form.Select>
            {/* <Field name="address" /> */}
            {errors[inputName] && touched[inputName] ? (
                <div className={[className.InputError]}>{errors[inputName]}</div>
            ) : null}
        </Form.Group>
    )
}

export default FormDropDown