import React from 'react';
import nurseryHub from '../../Data/nursery-hub';
import '../../Styles/NurseryHub.css';

export default function WelcomeScreen() {
  return (
    <>
      {nurseryHub.filter(img => img.id === "welcome_ziggy").map(Img => (
        <div key={Img.id} id={Img.id} className={Img.pos}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
    </>
  );
};