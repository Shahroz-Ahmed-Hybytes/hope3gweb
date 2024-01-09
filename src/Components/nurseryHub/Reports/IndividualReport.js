import React from 'react';
import '../../../Styles/Reports.css';

export default function IndividualReport() {
  return (
    <div className="report-entries">
      <table>
        <thead>
          <th className="report-field" id="episode">Episodes</th>
          <th className="report-field" id="attended">No. Attended</th>
          <th className="report-field" id="learned">Learned</th>
        </thead>
        <tbody>
          <tr>
            <td className="report-record">Electrical Safety</td>
            <td className="report-record">2</td>
            <td className="report-record">&#10003;</td>
          </tr>
          <tr>
            <td className="report-record">Food Safety</td>
            <td className="report-record">1</td>
            <td className="report-record">&#10003;</td>
          </tr>
          <tr>
            <td className="report-record">The Number 4</td>
            <td className="report-record">3</td>
            <td className="report-record">&#10003;</td>
          </tr>
          <tr>
            <td className="report-record">Electrical Safety</td>
            <td className="report-record">1</td>
            <td className="report-record">&#10005;</td>
          </tr>
          <tr>
            <td className="report-record">Food Safety</td>
            <td className="report-record">1</td>
            <td className="report-record">&#10005;</td>
          </tr>
          <tr>
            <td className="report-record">The Number 4</td>
            <td className="report-record">1</td>
            <td className="report-record">&#10005;</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};