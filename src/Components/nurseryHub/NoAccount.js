import React from 'react';
import { Link } from 'react-router-dom';
import nurseryHub from '../../Data/nursery-hub';
import '../../Styles/NurseryHub.css';

export default function NoAccount() {
  return (  
    <div>
      {nurseryHub.filter(img => img.id === "welcome_text").map  (Img => (
        <div key={Img.id} id={Img.id} className={Img.pos}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
      <br />
      <p className="welcome-msg" id="no_account">We have no account registered to this email.</p>
      <div className="button-link">
        {nurseryHub.filter(img => img.id === "sign_up_button").map(Img => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </div>
          )
        )}
      </div>
    </div>
  );
};