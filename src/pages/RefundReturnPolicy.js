import React from "react";

function RefundReturnPolicy() {
  return (
    <div className="container p-4">
      <div className="ds-markdown" style={{ zoom: 1.143 }}>

        <h2>REFUND & RETURN POLICY</h2>

        <h3>1.1 General Principle</h3>
        <p>
          Refunds and returns vary by business division due to the nature of
          products/services. Burgeon Group processes refunds only after
          verification and within specified timeframes.
        </p>

        <h3>1.2 Division-Specific Rules</h3>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Division</th>
              <th>Eligible for Refund/Return</th>
              <th>Time Window</th>
              <th>Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Technology</strong></td>
              <td>Software subscriptions, unused cloud credits, hardware devices</td>
              <td>14 days</td>
              <td>No refund for used APIs or custom development</td>
            </tr>
            <tr>
              <td><strong>Organic Food</strong></td>
              <td>Defective or spoiled items</td>
              <td>7 days</td>
              <td>Photo proof required within 24 hours</td>
            </tr>
            <tr>
              <td><strong>Construction</strong></td>
              <td>Unused materials</td>
              <td>30 days</td>
              <td>Restocking fees may apply</td>
            </tr>
            <tr>
              <td><strong>Travel</strong></td>
              <td>Cancelable bookings</td>
              <td>Varies</td>
              <td>Subject to airline/hotel policy</td>
            </tr>
          </tbody>
        </table>

        <h3>1.3 How to Request a Refund</h3>
        <ul>
          <li><strong>Technology:</strong> support@burgeontechnology.com</li>
          <li><strong>Organic Food:</strong> returns@burgeonorganics.com</li>
          <li><strong>Construction:</strong> accounts@burgeonconstructions.com</li>
          <li><strong>Travel:</strong> refunds@burgeontravels.com</li>
        </ul>

        <p>
          Refunds are credited within <strong>14–21 business days</strong>.
        </p>
      </div>
        <br/>
        <h3>CONTACT INFORMATION</h3>
        <p>
          <strong>Email:</strong> info@burgeon-grp.com
        </p>
    </div>
  );
}

export default RefundReturnPolicy;