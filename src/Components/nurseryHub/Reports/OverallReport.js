import React from 'react';
import '../../../Styles/Reports.css';

export default function OverallReport() {
  return (
    <div className="report-entries">
      <table>
        <thead>
          <th className="report-field" id="episode">Episode</th>
          <th className="report-field" id="attended">No. Attended</th>
          <th className="report-field" id="learned">No. Learned</th>
        </thead>
        <tbody>
          <tr>
            <td className="report-record">Electrical Safety</td>
            <td className="report-record">25</td>
            <td className="report-record">25</td>
          </tr>
          <tr>
            <td className="report-record">Food Safety</td>
            <td className="report-record">23</td>
            <td className="report-record">23</td>
          </tr>
          <tr>
            <td className="report-record">The Number 4</td>
            <td className="report-record">27</td>
            <td className="report-record">27</td>
          </tr>
          <tr>
            <td className="report-record">Electrical Safety</td>
            <td className="report-record">25</td>
            <td className="report-record">25</td>
          </tr>
          <tr>
            <td className="report-record">Food Safety</td>
            <td className="report-record">23</td>
            <td className="report-record">23</td>
          </tr>
          <tr>
            <td className="report-record">The Number 4</td>
            <td className="report-record">27</td>
            <td className="report-record">27</td>
          </tr>
          <tr>
            <td className="report-record">Electrical Safety</td>
            <td className="report-record">25</td>
            <td className="report-record">25</td>
          </tr>
          <tr>
            <td className="report-record">Food Safety</td>
            <td className="report-record">23</td>
            <td className="report-record">23</td>
          </tr>
          <tr>
            <td className="report-record">The Number 4</td>
            <td className="report-record">27</td>
            <td className="report-record">27</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};