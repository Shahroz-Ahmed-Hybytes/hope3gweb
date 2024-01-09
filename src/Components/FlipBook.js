import React from 'react';
import aboutUs from '../Data/about-us';
import '../Styles/AboutUs.css';
import FlipPage from 'react-flip-page';

export default function FlipBook () {
  return (
    <FlipPage showSwipeHint="true" className="book-content" style={{marginTop:"-50px"}} orientation="horizontal" height="594" width="985"  >
      {aboutUs.map((aboutUs, index) => (
        <div key={index} className="book-pages">
          <img src={aboutUs.pages} alt="" className="img-size" />
        </div>
      ))}
    </FlipPage>
  );
}