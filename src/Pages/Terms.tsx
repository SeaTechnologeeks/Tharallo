const Terms = () => {
  return (
    <>
      {/* HERO SECTION */}
      <header style={{ height: "40vh", position: "relative" }}>
        <div className="video-background">
          <div
            className="video-overlay"
            style={{ background: "rgba(0, 26, 51, 0.95)" }}
          ></div>
        </div>

        <div className="hero-content">
          <h1>Terms and Conditions</h1>
          <p>Comprehensive Regulatory Framework for Professional Engagements</p>
        </div>
      </header>

      {/* CONTENT SECTION */}
      <section className="report-section">
        <div
          className="report-container"
          style={{ maxWidth: "900px", textAlign: "justify" }}
        >
          <h2>Introduction and Binding Nature</h2>
          <p>
            This document governs the relationship between Tharollo Consulting
            Services and any party accessing this website or enlisting our
            professional services. By engaging with our digital presence or
            formalizing a mandate, the User or Client enters into a binding
            legal agreement.
          </p>

          <h2 style={{ marginTop: "40px" }}>Definitions and Interpretations</h2>
          <p>
            Tharollo refers to Tharollo Consulting Services and its authorized
            representatives. The Client refers to any legal entity or individual
            enlisting professional advisory. Services encompass Management,
            Technology, and Engineering consulting.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Provision of Professional Advisory
          </h2>
          <p>
            Tharollo provides specialized advisory services designed to solve
            complex enterprise equations. Deliverables are based on
            client-provided data and context. Outcomes are not guaranteed as
            they depend on external market variables.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Intellectual Property and Proprietary Frameworks
          </h2>
          <p>
            All methodologies, f(x) frameworks, and consulting blueprints remain
            the exclusive property of Tharollo. Unauthorized use or reproduction
            is strictly prohibited.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Financial Provisions and Payment Terms
          </h2>
          <p>
            Fees are based on scope and complexity. Payments are due within 30
            days unless otherwise agreed. Late payments may incur interest and
            service suspension.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Confidentiality and Mutual Non-Disclosure
          </h2>
          <p>
            All exchanged information is confidential and remains protected
            indefinitely after engagement completion.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Limitation of Liability and Indemnification
          </h2>
          <p>
            Liability is limited to fees paid for the project. Tharollo is not
            responsible for indirect or consequential damages.
          </p>

          <h2 style={{ marginTop: "40px" }}>Force Majeure</h2>
          <p>
            Neither party is liable for disruptions caused by events beyond
            reasonable control including infrastructure failures or emergencies.
          </p>

          <h2 style={{ marginTop: "40px" }}>Ethical Conduct and Compliance</h2>
          <p>
            Tharollo enforces strict anti-corruption policies and reserves the
            right to terminate engagements for unethical conduct.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Jurisdiction and Dispute Resolution
          </h2>
          <p>
            Governed by South African law. Disputes are resolved through AFSA
            arbitration in English.
          </p>

          <p
            style={{
              marginTop: "60px",
              fontWeight: "bold",
              color: "#003366",
            }}
          >
            Formal legal notices should be directed to legal@tharollo.com
          </p>

          <p style={{ fontStyle: "italic", color: "#888" }}>
            Document Control: LCS-2026-V3 | Last Reviewed: January 2026
          </p>
        </div>
      </section>
    </>
  );
};

export default Terms;
