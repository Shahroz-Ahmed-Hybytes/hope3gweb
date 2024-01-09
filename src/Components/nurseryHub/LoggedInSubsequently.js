import React from 'react';
import nurseryHub from '../../Data/nursery-hub';
import '../../Styles/NurseryHub.css';

export default function LoggedInSubsequently() {
  return (  
    <>
      {nurseryHub.filter(img => img.id === "welcome_back_text").map(Img => (
        <div key={Img.id} id={Img.id} className={Img.pos}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
      <div className="welcome-message">
      {nurseryHub.filter(img => img.id === "greeting_box").map(Img => (
        <div key={Img.id} id={Img.id} className={Img.pos}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
      </div>
    </>
  );
};