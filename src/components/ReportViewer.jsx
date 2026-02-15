import React from "react";
import jsPDF from "jspdf";
import "../styles/report.css";

const ReportViewer = ({ report, onClose }) => {
  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    doc.setFont("helvetica");

    let y = 20;
    doc.setFontSize(18);
    doc.setTextColor("#2ec4b6");
    doc.text("🧾 Wellness Report", 105, y, { align: "center" });

    y += 10;
    doc.setDrawColor("#2ec4b6");
    doc.setLineWidth(0.8);
    doc.line(20, y, 190, y); 

    y += 10;
    doc.setFontSize(12);
    doc.setTextColor("#1f2933");
    doc.text(`Patient Name: ${report.user?.name || "N/A"}`, 20, y);
    y += 7;
    doc.text(`Generated On: ${new Date(report.createdAt).toLocaleString()}`, 20, y);

    y += 10;
    doc.setFontSize(14);
    doc.setTextColor("#3a86ff");
    doc.text("Summary:", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.setTextColor("#1f2933");
    doc.text(report.aiReport.summary || "No summary provided.", 20, y, { maxWidth: 170, align: "left" });

    y += 15;
    doc.setFontSize(14);
    doc.setTextColor("#3a86ff");
    doc.text("Causes / Observations:", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.setTextColor("#1f2933");
    doc.text(report.aiReport.causes || "General wellness observations.", 20, y, { maxWidth: 170 });

    y += 15;
    doc.setFontSize(14);
    doc.setTextColor("#3a86ff");
    doc.text("Precautions:", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.setTextColor("#1f2933");
    doc.text(report.aiReport.precautions || "Follow general wellness guidelines.", 20, y, { maxWidth: 170 });

    y += 15;
    doc.setFontSize(14);
    doc.setTextColor("#3a86ff");
    doc.text("Diet Suggestions:", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.setTextColor("#1f2933");
    doc.text(report.aiReport.diet || "Balanced meals advised.", 20, y, { maxWidth: 170 });

    y += 15;
    doc.setFontSize(14);
    doc.setTextColor("#3a86ff");
    doc.text("Exercise / Lifestyle:", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.setTextColor("#1f2933");
    doc.text(report.aiReport.exercises || "Stay active, but avoid overexertion.", 20, y, { maxWidth: 170 });

    y += 15;
    doc.setFontSize(14);
    doc.setTextColor("#3a86ff");
    doc.text("Over-the-Counter Suggestions:", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.setTextColor("#1f2933");
    doc.text(report.aiReport.otc || "Use OTC medicines if safe.", 20, y, { maxWidth: 170 });

    y += 15;
    doc.setFontSize(12);
    doc.setTextColor("#6b7280");
    doc.text("⚠️ Disclaimer: This is a general wellness report. Not a medical diagnosis. Consult a doctor for personalized advice.", 20, y, { maxWidth: 170 });

    doc.save(`Wellness_Report_${new Date().toISOString()}.pdf`);
  };

  return (
    <div className="report-overlay">
      <div className="report-container">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2 className="report-title">🧾 Wellness Report</h2>
        <p className="report-subtitle">
          Generated on: {new Date(report.createdAt).toLocaleString()}
        </p>

        <div className="report-section">
          <h3>Summary</h3>
          <p>{report.aiReport.summary || "No summary provided."}</p>
        </div>

        <div className="report-section">
          <h3>Causes / Observations</h3>
          <p>{report.aiReport.causes || "General wellness observations."}</p>
        </div>

        <div className="report-section">
          <h3>Precautions</h3>
          <p>{report.aiReport.precautions || "Follow general wellness guidelines."}</p>
        </div>

        <div className="report-section">
          <h3>Diet Suggestions</h3>
          <p>{report.aiReport.diet || "Balanced meals advised."}</p>
        </div>

        <div className="report-section">
          <h3>Exercise / Lifestyle</h3>
          <p>{report.aiReport.exercises || "Stay active, but avoid overexertion."}</p>
        </div>

        <div className="report-section">
          <h3>Over-the-Counter Suggestions</h3>
          <p>{report.aiReport.otc || "Use OTC medicines if safe."}</p>
        </div>

        <p className="report-disclaimer">
          Disclaimer: This is a general wellness report. Not a medical diagnosis. Consult a doctor for personalized advice.
        </p>

        <div className="report-actions">
          <button className="btn-primary" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;
