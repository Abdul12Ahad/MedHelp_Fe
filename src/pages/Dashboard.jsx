import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HealthForm from "../components/HealthForm";
import ReportCard from "../components/ReportCard";
import ReportViewer from "../components/ReportViewer";
import { apiRequest } from "../utils/api";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [reports, setReports] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeReport, setActiveReport] = useState(null);

  const fetchReports = async () => {
  const data = await apiRequest("/report");
  setReports(data.reports);
};

  useEffect(() => {
    fetchReports();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <h2>Hello, {user?.name} 👋</h2>
        <button className="btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <section className="reports-section">
        <h3>Your Previous Wellness Reports</h3>

        {reports.length === 0 ? (
          <p className="muted-text">No reports generated yet.</p>
        ) : (
          <div className="report-list">
            {reports.map((report) => (
              <ReportCard
                key={report._id}
                report={report}
                onView={() => setActiveReport(report)}
              />
            ))}
          </div>
        )}
      </section>

      {activeReport && (
        <ReportViewer
          report={activeReport}
          onClose={() => setActiveReport(null)}
        />
      )}

<div className="generate-section">
  <button
    className="btn-primary large"
    onClick={() => setShowForm(true)}
  >
    + Generate New Wellness Report
  </button>
</div>

{showForm && (
  <HealthForm
    onClose={() => setShowForm(false)}
    onReportGenerated={() => {
      fetchReports();
      setShowForm(false);
    }}
  />
)}
    </div>
  );
};

export default Dashboard;
