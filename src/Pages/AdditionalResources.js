import React from 'react';
import { Link } from 'react-router-dom';
import resources from '../Data/additional-resources';
import '../Styles/AdditionalResources.css';

export default function AdditionalResources() {
  return (
    <div className="resources-outer-container">
      <div className="resources-inner-container">
        <h1 className="hub_title">Additional Resources</h1>
        <div className="resource-collection">
          {resources.filter(img => img.btn === "resource").map(Img => (
            <div key={Img.id} id={Img.id} className="resource-item">
              <Link to={Img.path}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </Link>
            </div>
            )
          )} 
        </div>
      </div>
      <div className="more-to-come">
        {resources.filter(img => img.id === "desk_ziggy_and_more_to_come").map(Img => (
          <div key={Img.id} id={Img.id}>
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </div>
          )
        )} 
      </div>
    </div>
  );
};