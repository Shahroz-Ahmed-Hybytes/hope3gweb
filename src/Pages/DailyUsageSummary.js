import React from 'react';
import { Link } from 'react-router-dom';
import { SearchDailyUse, DailyUseReport, PrintDownloadReport } from '../Components/ComponentIndex';
import reports from '../Data/reports';
import '../Styles/Reports.css';

export default function DailyUsageSummary() {
  return (
  <div className="reports-outer-container">
    <div className="report-inner-container">
      <div className="report-header">
        {reports.filter(img => img.id === "yellow_go_back").map(Img => (
          <div key={Img.id} id={Img.id} className="back-to-reports-link">
            <Link to={Img.path}>
              <img src={Img.image} alt={Img.alt} className="img-size"/>
            </Link>
          </div>
          )
        )}
        <div>
          <h1 className="reports_title">Reports - Daily Use Summary</h1>
        </div>
      </div>
      <div className="balance-container">
        <SearchDailyUse />
        <DailyUseReport />
        <PrintDownloadReport />
      </div>
    </div>
  </div>
  )
};