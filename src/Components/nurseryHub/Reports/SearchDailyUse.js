import React from 'react';
import '../../../Styles/Reports.css';

export default function SearchDailyUse() {
  return (
    <div className="search-reports">
      <div className="search-daily-use">
        <fieldset>
          <label>Date</label>
          <input type="text" className="search-date" placeholder="DD/MM/YYYY" />
        </fieldset>
        <button className="search-btn">
          Search
        </button>
      </div>
    </div>
  )
};