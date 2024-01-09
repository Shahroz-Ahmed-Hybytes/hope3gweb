import React, {useState} from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import topUp from '../Data/top-up';
import '../Styles/BalanceTopUp.css';

export default function BalanceTopUp() {
  const greyed_btn = ('./Images/nurseryHub/pay_now_button_greyed.png')
  const colored_btn = ('./Images/nurseryHub/pay_now_button.png')
  const form_button = {greyed_btn, colored_btn}
  const [formBtn, setFormBtn] = useState(form_button.greyed_btn)

  function handleFormChange() {
    setFormBtn(form_button.colored_btn);
  }

  return (
    <div className="balance-top-up-outer-container">
      <div className="balance-top-up-inner-container">
        <h1 className="balance-top-up_title">Balance Top-Up</h1>
        <div className="balance-top-up">
          <div className="top-up">
            <p>How much would you like to add?</p>
            <div className="add-figure">
              <input type="text" id="amount" />
              <div className="money-line"></div>
              <select name="currency" id="currency">
                <option value="pound">£</option>
                <option value="euro">€</option>
                <option value="dollar">$</option>
                <option value="yen">¥</option>
              </select>
            </div>
          </div>
          <div className="payment_ziggy">
            {topUp.filter(img => img.id === "top_up_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
        </div>
        <Form className="payment-form">
          <Row className="balance-payment">
            <Col className="billing-information">
              <h2 className="bill-pay-title">Billing information</h2>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input name="email" className="billing-long-input" id="email-address" onChange={handleFormChange} />
              </fieldset>
              <fieldset>
                <label htmlFor="address">Address</label>
                <input name="address" className="billing-long-input" id="first-line-address" onChange={handleFormChange} />
                <input name="address" className="billing-long-input" onChange={handleFormChange} />
              </fieldset>
              <div id="city-postal-code">
                <fieldset>
                  <label htmlFor="city">City</label>
                  <input name="city" className="billing-short-input" onChange={handleFormChange} />
                </fieldset>
                <fieldset>
                  <label htmlFor="zip-postal-code">Zip / Postal Code</label>
                  <input name="zip-postal-code" className="billing-short-input" onChange={handleFormChange} />
                </fieldset>
              </div>
              <fieldset className="country-dropdown">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" onChange={handleFormChange}>
                <option value=""></option>
                <option value="uk">UK</option>
                <option value="eu">EU</option>
                <option value="us">US</option>
                <option value="japan">Japan</option>
                </select>
              </fieldset>
            </Col>
            <Col className="payment-method">
              <h2 className="bill-pay-title">Payment method</h2>
              <div className="card-option">
                <label type="radio" name="radio" className="container">
                  {topUp.filter(img => img.id === "master_card").map(Img => (
                    <div key={Img.id} id={Img.id} className={Img.pos}>
                      <img src={Img.image} alt={Img.alt} className="img-size"/>
                    </div>
                    )
                  )}
                <input type="radio" name="radio" onChange={handleFormChange} />
                <span class="custom-radio"></span>
                </label>
                <label type="radio" name="radio" className="container">
                  {topUp.filter(img => img.id === "visa_card").map(Img => (
                    <div key={Img.id} id={Img.id} className={Img.pos}>
                      <img src={Img.image} alt={Img.alt} className="img-size"/>
                    </div>
                    )
                  )}
                <input type="radio" name="radio" onChange={handleFormChange} />
                <span class="custom-radio"></span>
                </label>
              </div>
              <fieldset>
                <label htmlFor="card-number">Card Number</label>
                <input name="card-number" className="billing-long-input card-details" onChange={handleFormChange} />
              </fieldset>
              <fieldset>
                <label htmlFor="name-on-card">Name on Card</label>
                <input name="name-on-card" className="billing-long-input card-details" onChange={handleFormChange} />
              </fieldset>
              <div id="expire-date-cvv-no">
                <fieldset>
                  <label htmlFor="expire-date">Expire Date</label>
                  <input name="expire-date" className="billing-short-input card-details" onChange={handleFormChange} />
                </fieldset>
                <fieldset>
                  <label htmlFor="cvv-no">CVV Number</label>
                  <input name="cvv-no" className="billing-short-input card-details" onChange={handleFormChange} />
                </fieldset>
              </div>
            </Col>
          </Row>
          <Row className="pay-now-btn">
            <Button onClick={() => setFormBtn(form_button.greyed_btn)} className="pay-button">
              <img src={formBtn} alt="Pay Now" width="100%" />
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};