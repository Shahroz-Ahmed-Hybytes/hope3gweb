import React from 'react';
import '../../../Styles/Reports.css';

export default function DailyUseReport() {
  return (
    <div className="report-entries" id="balance-entries">
      <table>
        <thead>
          <th className="report-field" id="date">Date</th>
          <th className="report-field" id="description">Description</th>
          <th className="report-field" id="amount">Amount</th>
          <th className="report-field" id="balance">Balance</th>
        </thead>
        <tbody>
          <tr>
            <td className="report-record">Prev</td>
            <td className="report-record">Balance brought forward</td>
            <td className="report-record">-</td>
            <td className="report-record">99.25</td>
          </tr>
          <tr>
            <td className="report-record">Date</td>
            <td className="report-record">20 Food Safety Lessons Purchased</td>
            <td className="report-record">5.00</td>
            <td className="report-record">94.25</td>
          </tr>
          <tr>
            <td className="report-record">Date</td>
            <td className="report-record">40 Food Safely Lessons Purchased</td>
            <td className="report-record">10.00</td>
            <td className="report-record">84.25</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};