import React from 'react';
import { Link } from 'react-router-dom';
import nurseryHub from '../../Data/nursery-hub';
import '../../Styles/NurseryHub.css';

export default function GetPassword() {
  return (  
    <div>
      {nurseryHub.filter(img => img.id === "welcome_text").map  (Img => (
        <div key={Img.id} id={Img.id} className={Img.pos}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
      <br />
      <p className="welcome-msg">Please enter your email address and we'll send you a temporary password if you have an account.</p>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input name="email" className="login-input" />
        </fieldset>
        <div className="button-link">
          {nurseryHub.filter(img => img.id === "send_email_button").map  (Img => (
            <div key={Img.id} id={Img.id} className={Img.pos}>
              <Link to={Img.path}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </Link>
            </div>
            )
          )}
          <Link to="/nursery-hub-no-account" className="forgot-password">Don't have an account?</Link>
        </div>
      </form>
    </div>
  );
};