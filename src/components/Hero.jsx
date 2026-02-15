import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>
        Smart Wellness Guidance,<br />
        Built for Safety and Simplicity
      </h1>

      <p>
        Get AI-powered, non-diagnostic health insights,
        lifestyle suggestions, and care guidance —
        designed for awareness, not treatment.
      </p>

      <button
        className="btn-primary"
        onClick={() => navigate("/register")}
      >
        Get Started
      </button>
    </section>
  );
};

export default Hero;
