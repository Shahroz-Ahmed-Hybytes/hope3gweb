import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { OverallReport, SearchClass, ClassReport, SearchIndividual, IndividualReport, PrintDownloadReport } from '../Components/ComponentIndex';
import reports from '../Data/reports';
import '../Styles/Reports.css';

export default function EpisodeTaughtClass() {
  const [key, setKey] = useState('individual');

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
        <h1 className="reports_title">Reports - Episodes Taught</h1>
        </div>
      </div>
      <div className="report-container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="report-tabs"
        >
          <Tab eventKey="overall" title="Overall" tabClassName="tab">
            <OverallReport />
            <PrintDownloadReport />
          </Tab>
          <Tab eventKey="class" title="Class" tabClassName="tab">
            <SearchClass />
            <ClassReport />
            <PrintDownloadReport />
          </Tab>
          <Tab eventKey="individual" title="Individual" tabClassName="tab">
            <SearchIndividual />
            <IndividualReport />
            <PrintDownloadReport />
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
  )
};