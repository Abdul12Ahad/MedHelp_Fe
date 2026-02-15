import { useState } from "react";
import { apiRequest } from "../utils/api";
import "../styles/healthform.css";

const HealthForm = ({ onClose, onReportGenerated }) => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    symptoms: "",
    duration: "",
    temperature: "",
    lifestyle: "",
    existingConditions: "",
    allergies: "",
    medications: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiRequest("/report/generate", "POST", formData);
      onReportGenerated();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h3>Wellness Input Form</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="health-form">
          <div className="form-row">
            <input name="age" placeholder="Age" onChange={handleChange} />
            <input name="gender" placeholder="Gender" onChange={handleChange} />
          </div>

          <div className="form-row">
            <input name="duration" placeholder="Symptom duration" onChange={handleChange} />
            <input name="temperature" placeholder="Body temperature" onChange={handleChange} />
          </div>

          <textarea
            name="symptoms"
            placeholder="Describe your symptoms clearly"
            rows="3"
            onChange={handleChange}
          />

          <textarea
            name="existingConditions"
            placeholder="Existing medical conditions (if any)"
            rows="2"
            onChange={handleChange}
          />

          <textarea
            name="lifestyle"
            placeholder="Lifestyle (sleep, activity, stress, diet)"
            rows="2"
            onChange={handleChange}
          />

          <textarea
            name="allergies"
            placeholder="Allergies"
            rows="2"
            onChange={handleChange}
          />

          <textarea
            name="medications"
            placeholder="Current medications"
            rows="2"
            onChange={handleChange}
          />

          <button className="btn-primary full" disabled={loading}>
            {loading ? "Generating..." : "Generate Wellness Report"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthForm;
