import React from 'react';
import '../../../Styles/Reports.css';

export default function SearchIndividual() {
  return (
    <div className="search-reports">
      <div className="search-pupil">
        <fieldset>
          <label>Class Name</label>
          <select className="search-select">
            <option value=""></option>
            <option value="">Class 1</option>
            <option value="">Class 2</option>
            <option value="">Class 3</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Pupil Name</label>
          <select className="search-select">
            <option value=""></option>
            <option value="">Pupil 1</option>
            <option value="">Pupil 2</option>
            <option value="">Pupil 3</option>
          </select>
        </fieldset>
        <button className="search-btn">
          Search
        </button>
      </div>
    </div>
  )
};