import React from 'react';
import { EmailSent } from '../Components/ComponentIndex';
import nurseryHub from '../Data/nursery-hub';
import '../Styles/NurseryHub.css';

export default function NurseryHubEmailSent() {
  return (
    <div className="welcome-hub-container">
      <div className="ziggy-show">
        {nurseryHub.filter(img => img.id === "welcome_ziggy").map  (Img => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </div>
          )
        )}
      </div>
      <div className="welcome-content">
        <EmailSent />
      </div>
    </div>
  );
};