import React from 'react';
import reports from '../../../Data/reports';
import '../../../Styles/Reports.css';

export default function PrintDownloadReport() {
  return (
    <div className="print-and-download-report">
      {reports.filter(img => img.btn === "report").map(Img => (
        <div key={Img.id} id={Img.id} className={Img.pos}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
    </div>
  )
};