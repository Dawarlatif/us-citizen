import React from "react";
// import reporticon from "../assets/report-icon.svg";
// import loadericon from "../assets/fading-circles-loader.svg";

const ReportForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="input-form report-container">
      <form onSubmit={handleSubmit} className="report" id="report-form">
        <input
          type="text"
          id="report-phone-input"
          name="phone"
          placeholder="7861772343"
          required
        />
        <select id="reason-input" name="reason-input" required>
          <option value="" disabled>
            Specify reason
          </option>
          <option value="asked_for_dnc">Take me off</option>
          <option value="abuser">Abuser</option>
          <option value="screamer">Screamer</option>
          <option value="threatener">Threatener</option>
          <option value="troller">Playing Around</option>
          <option value="smart_dnc">Smart DNC</option>
          <option value="litigator">Litigator</option>
          <option value="complainer">Complainer</option>
        </select>
        <label
          htmlFor="report-btn"
          className="submit-label"
          id="report-submit-label"
        >
          {/* <img
            className="report-icon"
            id="report-icon"
            src={reporticon}
            alt="report-icon"
          /> */}
          <input type="submit" id="report-btn" role="button" value="Report" />
          {/* <img
            className="loader-icon"
            id="loader-icon"
            src={loadericon}
            alt="loader-icon"
          /> */}
        </label>
      </form>
    </div>
  );
};

export default ReportForm;
