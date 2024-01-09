import React from 'react';
import { Link } from 'react-router-dom';
import nurseryHub from '../../Data/nursery-hub';
import '../../Styles/NurseryHub.css';

export default function EmailSent() {
  return (  
    <div>
      {nurseryHub.filter(img => img.id === "welcome_text").map  (Img => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </div>
          )
        )}
      <br />
      <p className="welcome-msg">An email has been sent with a temporary password. It may take a few minutes to appear.</p>
      <div className="button-link">
        {nurseryHub.filter(img => img.id === "have_not_received_button").map(Img => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <Link to={Img.path}>
              <img src={Img.image} alt={Img.alt} className="img-size"/>
            </Link>
          </div>
          )
        )}
        <Link to="/nursery-hub" className="forgot-password">Back to login</Link>
      </div>
    </div>
  );
};