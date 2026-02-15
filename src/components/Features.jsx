const features = [
  {
    title: "AI-Generated Wellness Reports",
    desc: "Structured health summaries based on symptoms and lifestyle inputs."
  },
  {
    title: "Safe & Non-Diagnostic Guidance",
    desc: "Designed strictly for awareness — never diagnosis or prescriptions."
  },
  {
    title: "Lifestyle & Diet Suggestions",
    desc: "Simple, actionable tips tailored to your daily habits."
  },
  {
    title: "OTC & Home Care Awareness",
    desc: "General over-the-counter guidance with safety precautions."
  },
  {
    title: "Doctor Visit Alerts",
    desc: "Clear signs indicating when professional medical help is needed."
  },
  {
    title: "Downloadable Reports (PDF)",
    desc: "Save and share your wellness reports anytime."
  }
];

const Features = () => {
  return (
    <section className="features">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
