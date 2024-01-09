import React from 'react';
// Comment out the corresponding import for the component not in use below 
import { WelcomeScreen, LoggedInInitially } from '../Components/ComponentIndex';
// import { WelcomeScreen, LoggedInSubsequently } from '../Components/ComponentIndex';

// When a condition is implemented in the welcome-content div to render out the appropriate component when a user logs in, replace the above two imports with this import:
// import { WelcomeScreen, LoggedInInitially, LoggedInSubsequently } from '../Components/ComponentIndex';

import '../Styles/NurseryHub.css';

export default function NurseryHubLoggedIn() {
  return (
    <div className="welcome-hub-container">
      <div className="ziggy-show">
        <WelcomeScreen />
      </div>
      <div className="welcome-content">
        {/* Carry out a check here to detect if the user has logged into the Nursery Hub for the first time or every other time */}
        {/* If the user logged in for the first time, render the LoggedInInitially component here. If the user logs in anytime afterwards, render the LoggedInSubsequently component here */}
        {/* Keep one of these components commented out at a time to see the two logged in pages for now. Also do the same for the corresponding imports above */}
        <LoggedInInitially /> 
        {/* <LoggedInSubsequently /> */}
      </div>
    </div>
  );
};