import React from 'react';
import { Link } from 'react-router-dom';
import reports from '../Data/reports';
import '../Styles/Reports.css';

export default function Reports() {
  return (
    <div className="reports-outer-container">
      <div className="reports-inner-container">
      <h1 className="reports_title">Reports</h1>
        {reports.filter(img => img.menu === "img").map(Img => (
          <div key={Img.id} id={Img.id} className={Img.pos}>
            <img src={Img.image} alt={Img.alt} className="img-size"/>
          </div>
          )
        )}
        {reports.filter(img => img.menu === "link").map(Img => (
          <Link to={Img.path} className="link-box">
            <div key={Img.id} id={Img.id} className={Img.pos}></div>
          </Link>
          )
        )}
    </div>
  </div>
  )
};