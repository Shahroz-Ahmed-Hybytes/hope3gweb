import React from 'react';
import { Link } from 'react-router-dom';
import reports from '../../../Data/reports';
import '../../../Styles/Reports.css';

export default function SearchBalance() {
  return (
    <div className="search-reports">
      <div className="search-balance">
        <fieldset>
          <label>From</label>
          <input type="text" className="search-date" placeholder="DD/MM/YYYY" />
        </fieldset>
        <fieldset>
          <label>To</label>
          <input type="text" className="search-date" placeholder="DD/MM/YYYY" />
        </fieldset>
        <button className="search-btn">
          Search
        </button>
      </div>
      {reports.filter(img => img.id === "top_up_button").map(Img => (
        <div key={Img.id} id={Img.id}>
          <Link to={Img.path} className="top-up-btn">
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </Link>
        </div>
        )
      )}
    </div>
  )
};