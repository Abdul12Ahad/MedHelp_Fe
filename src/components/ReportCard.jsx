import "../styles/dashboard.css";

const ReportCard = ({ report, onView }) => {
  return (
    <div className="report-card">
      <div>
        <h4>Wellness Report</h4>
        <p className="muted-text">
          {new Date(report.createdAt).toLocaleDateString()}
        </p>
        <span className="badge">{report.source}</span>
      </div>

      <button className="btn-secondary" onClick={onView}>
        View Report
      </button>
    </div>
  );
};

export default ReportCard;
