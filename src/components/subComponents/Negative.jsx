import "./subCss/Positive.css";
import ReportNegativeHistory from "./notify/ReportNegativeHistory";
import ReportNegative from "./notify/ReportNegative";
import { useState } from "react";

const Negative = ({ accountInfo }) => {
  const [reportPage, setReportPage] = useState(true);
  const [reportHistory, setReportHistory] = useState(false);

  const toggleActiveReport = (element) => {
    setReportPage(false);
    setReportHistory(false);

    const posLink = document.querySelectorAll(".pos-link");

    posLink.forEach((link) => {
      link.classList.remove("pos-link-active");
    });
    element.classList.add("pos-link-active");
  };

  return (
    <div className="positive-container">
      <div className="positive-report-container">
        <div className="positive-report-header">
          <div
            onClick={(e) => {
              toggleActiveReport(e.target);
              setReportPage(true);
            }}
            className="pos-link pos-link-active"
          >
            <i className="fas fa-bell me-2"></i>I've got my Negative Result
          </div>
          <div
            onClick={(e) => {
              toggleActiveReport(e.target);
              setReportHistory(true);
            }}
            className="pos-link"
          >
            <i className="far fa-paper-plane me-2"></i>History
          </div>
        </div>
        <hr />
        <div className="report-container-main">
          {reportPage && <ReportNegative accountInfo={accountInfo} />}

          {reportHistory && <ReportNegativeHistory accountInfo={accountInfo} />}
        </div>
      </div>
    </div>
  );
};

export default Negative;
