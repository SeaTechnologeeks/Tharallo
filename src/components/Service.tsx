import managementImg from "../assets/images/management.jpg";
import techImg from "../assets/images/tech.jpg";
import engineeringImg from "../assets/images/engineering.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services">
      <h2>Our Expertise</h2>
      <div className="pillar-container">
        <Link to="/management" className="pillar-summary">
          <div className="pillar-image-container">
            <img src={managementImg} alt="Management" />
          </div>
          <div className="pillar-text">
            <h3>Management Consulting</h3>
            <p>Strategic advisory and operational excellence.</p>
          </div>
        </Link>

        <Link to="/technology" className="pillar-summary">
          <div className="pillar-image-container">
            <img src={techImg} alt="Technology" />
          </div>
          <div className="pillar-text">
            <h3>Technology Consulting</h3>
            <p>Digital transformation and cloud architecture.</p>
          </div>
        </Link>

        <Link to="/engineering" className="pillar-summary">
          <div className="pillar-image-container">
            <img src={engineeringImg} alt="Engineering" />
          </div>
          <div className="pillar-text">
            <h3>Engineering Consulting</h3>
            <p>Industrial precision and technical rigor.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
