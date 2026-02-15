const benefits = [
  "Built with medical safety rules and ethical AI usage",
  "Supports awareness without replacing doctors",
  "Ideal for students, demos, and learning projects",
  "Privacy-focused with secure data handling"
];

const Benefits = () => {
  return (
    <section className="benefits">
      {benefits.map((b, i) => (
        <div className={`benefit ${i % 2 ? "right" : "left"}`} key={i}>
          {b}
        </div>
      ))}
    </section>
  );
};

export default Benefits;
