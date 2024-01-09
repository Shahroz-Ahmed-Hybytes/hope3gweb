import React, { useState } from 'react';
import nurserySettings from '../Data/nursery-settings';
import { Form, Button } from 'react-bootstrap';
import '../Styles/NurserySettings.css';

export default function NurserySettings() {
  const greyed_btn = ('./Images/nurseryHub/save_button_greyed.png')
  const colored_btn = ('./Images/nurseryHub/save_button.png')
  const form_button = {greyed_btn, colored_btn}
  const [formBtn, setFormBtn] = useState(form_button.greyed_btn)

  function handleFormChange() {
    setFormBtn(form_button.colored_btn);
  }
  
  return (
    <div className="nursery-settings-outer-container">
      <div className="nursery-settings-inner-container">
        <h1 className="nursery-settings_title">Nursery Settings</h1>
        <Form className="nursery-settings-form">
          <div className="settings-row">
            <div className="settings-col">
              <fieldset>
                <label>Name <span className="asterisk">*</span></label>
                <input type="text" className="input-field" onChange={handleFormChange} />
              </fieldset>
              <fieldset className="address">
                <label>Address <span className="asterisk">*</span></label>
                <input id="address-first-line" type="text" className="input-field" onChange={handleFormChange} />
                <input type="text" className="input-field" onChange={handleFormChange} />
              </fieldset>
              <div id="city-zip-code">
                <fieldset>
                  <label>City <span className="asterisk">*</span></label>
                  <input type="text" onChange={handleFormChange} />
                </fieldset>
                <fieldset>
                  <label>Zip / Postal Code <span className="asterisk">*</span></label>
                  <input type="text" onChange={handleFormChange} />
                </fieldset>
              </div>
              <fieldset className="country-dropdown" onChange={handleFormChange}>
                <label>Country <span className="asterisk">*</span></label>
                <select name="nursery-country" id="nursery-country">
                  <option value="">UK</option>
                  <option value="">EU</option>
                  <option value="">US</option>
                </select>
              </fieldset>
            </div>
            <div className="settings-col">
              <fieldset>
                <label>Main Contact <span className="asterisk">*</span></label>
                <input type="text" className="input-field" onChange={handleFormChange} />
              </fieldset>
              <fieldset>
                <label>Email Address <span className="asterisk">*</span></label>
                <input type="email" className="input-field" onChange={handleFormChange} />
              </fieldset>
              <fieldset>
                <label>How did you hear about us? <span className="asterisk">*</span></label>
                <select name="about-us" id="about-us" onChange={handleFormChange}>
                  <option value="">Website</option>
                  <option value="">Leaflet</option>
                  <option value="">Other</option>
                </select>
              </fieldset>
              <fieldset>
                <label>Recommender by (if applicable)</label>
                <input type="text" className="input-field" />
              </fieldset>
            </div>
          </div>
          <div className="account-no-save-btn">
            <div className="account-no">
              Account Number<br/>
              <span>01458627492938</span>    
            </div>
            <Button onClick={() => setFormBtn(form_button.greyed_btn)} className="save-button">
              <img src={formBtn} alt="Save" width="100%" />
            </Button>
          </div>
          {nurserySettings.filter(img => img.id === "rocket_ziggy").map(Img => (
            <div key={Img.id} id={Img.id} className={Img.pos}>
              <img src={Img.image} alt={Img.alt} className="img-size"/>
            </div>
            )
          )}
        </Form>
        <Form className="new-password">
          <fieldset className="password-field">
            <label>New Password <span className="asterisk">*</span></label>
            <input type="text" className="input-field" />
          </fieldset>
          <fieldset className="password-field">
            <label>Confirm New Password <span className="asterisk">*</span></label>
            <input type="text"className="input-field" />
          </fieldset>
          {nurserySettings.filter(img => img.id === "reset_button").map(Img => (
            <Button key={Img.id} id={Img.id} className="reset-button">
              <img src={Img.image} alt={Img.alt} className="img-size"/>
            </Button>
            )
          )}
        </Form>
      </div>
    </div>
  );
}
