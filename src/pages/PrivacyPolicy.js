import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container mt-5 mb-5">
      <div className="privacy-policy" style={{ zoom: 1.1 }}>
        <hr />

        <h1>Privacy Policy for Burgeon Group</h1>

        <p>
          <strong>Effective Date:</strong> [Insert Date] <br />
          <strong>Last Updated:</strong> [Insert Date]
        </p>

        <p>
          <strong>Burgeon Group</strong> ("Company," "we," "us," or "our")
          respects your privacy and is committed to protecting your personal
          data.
        </p>

        <h5>1. Scope and Applicability</h5>
        <p>
          This policy applies to all websites, mobile applications, services,
          and offline interactions operated by Burgeon Group.
        </p>

        <h5>2. Information We Collect</h5>
        <p>We may collect the following data:</p>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Business Division</th>
              <th>Data Collected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Technology</strong></td>
              <td>IP addresses, device IDs, cookies, login data</td>
            </tr>
            <tr>
              <td><strong>Organic Food</strong></td>
              <td>Name, address, payment info, purchase history</td>
            </tr>
            <tr>
              <td><strong>Construction</strong></td>
              <td>Business details, project data, CCTV footage</td>
            </tr>
            <tr>
              <td><strong>Travel/Tourism</strong></td>
              <td>Passport info, travel details, emergency contacts</td>
            </tr>
          </tbody>
        </table>

        <h5>3. How We Collect Data</h5>
        <ul>
          <li>Forms, bookings, purchases</li>
          <li>Cookies and tracking technologies</li>
          <li>Third-party services</li>
        </ul>

        <h5>4. How We Use Data</h5>
        <ul>
          <li>Improve services</li>
          <li>Process orders and bookings</li>
          <li>Ensure security and compliance</li>
        </ul>

        <h5>5. Data Sharing</h5>
        <p>
          We do not sell your data. We only share with partners, service
          providers, and legal authorities when required.
        </p>

        <h5>6. Data Security</h5>
        <p>
          We use encryption, secure servers, and best practices to protect your
          data.
        </p>

        <h5>7. Your Rights</h5>
        <ul>
          <li>Access your data</li>
          <li>Request deletion</li>
          <li>Withdraw consent</li>
        </ul>

        <h5>8. Contact</h5>
        <p>
          <strong>Email:</strong> privacy@burgeongroup.com <br />
          <strong>Address:</strong> [Insert Address]
        </p>

        <h5>9. Updates</h5>
        <p>
          We may update this policy from time to time. Changes will be posted
          here.
        </p>

        <hr />

        <p>
          <em>
            This policy is for informational purposes and not legal advice.
          </em>
        </p>

      </div>
    </div>
  );
}

export default PrivacyPolicy;