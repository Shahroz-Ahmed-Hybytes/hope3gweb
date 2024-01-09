import React from 'react';
import { Link } from 'react-router-dom';
import nurseryHub from '../../Data/nursery-hub';
import '../../Styles/NurseryHub.css';

export default function LoggedInInitially() {
  return (  
    <>
      {nurseryHub.filter(img => img.id === "welcome_text").map(Img => (
        <div key={Img.id} id={Img.id} className={Img.pos}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
      <div className="welcome-message">
        <p>With plenty of resources available, you should find everything you need only a few clicks away.</p>
        <p>From <Link to="/nursery-settings"><span className="nursery_settings help-link">editing your nursery settings</span></Link>, <Link to="/class-settings"><span className="class_info help-link">modifying your class information</span></Link>, <Link to="/reports"><span className="download_reports help-link">downloading reports</span></Link> to <Link to="/page-under-development"><span className="account_balance help-link">managing your account balance</span></Link>. You're all set so get started now!</p>
      </div>
    </>
  );
};