import React from 'react';
import { Link } from 'react-router-dom';
import nurseryHub from '../../Data/nursery-hub';
import '../../Styles/NurseryHub.css';

export default function LoginHome() {
  return (  
    <div>
      {nurseryHub.filter(img => img.id === "welcome_text").map  (Img => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </div>
          )
        )}
      <p id="incorrect_login" className="welcome-msg">Incorrect Email or Password</p>
      <form className="login-form">
        <fieldset>
          <label htmlFor="email">Email</label>
          <input name="email" className="login-input" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input name="password" className="login-input" />
        </fieldset>
        <div className="button-link">
          {nurseryHub.filter(img => img.id === "login_button").map (Img => (
            <div key={Img.id} id={Img.id} className={Img.pos}>
              <Link to={Img.path}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </Link>
            </div>
            )
          )}
          <Link to="/nursery-hub-get-password" className="forgot-password">I forgot my password</Link>
        </div>
      </form>
    </div>
  );
};