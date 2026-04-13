import React from "react";
import "../assets/style.css";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Tharollo</h3>
          <p>
            Advanced Strategic Advisory. <br />
            Rooted in Africa. Driven by Logic.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            {/* <li>
              <a href="/careers">Careers</a>
            </li> */}
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/privacy">Privacy Statement</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Tharollo Consulting Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
