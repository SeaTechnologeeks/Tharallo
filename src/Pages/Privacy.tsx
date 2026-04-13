const Privacy = () => {
  return (
    <>
      {/* HERO SECTION */}
      <header style={{ height: "40vh", position: "relative" }}>
        <div className="video-background">
          <div
            className="video-overlay"
            style={{ background: "rgba(0, 26, 51, 0.9)" }}
          ></div>
        </div>

        <div className="hero-content">
          <h1>Privacy Statement</h1>
          <p>Information Governance & Strategic Data Integrity</p>
        </div>
      </header>

      {/* CONTENT SECTION */}
      <section className="report-section">
        <div className="report-container" style={{ maxWidth: "900px" }}>
          <h2>Commitment to Data Privacy</h2>
          <p>
            Tharollo Consulting Services recognizes that the protection of
            personal information is a fundamental pillar of modern enterprise
            governance. We are committed to processing data with absolute
            transparency and in full compliance with the Protection of Personal
            Information Act (POPIA) and international best practices for data
            protection.
          </p>

          <h2 style={{ marginTop: "40px" }}>Scope of Information Processing</h2>
          <p>
            We collect and process personal information only to the extent
            necessary to deliver high-precision consulting services. This
            encompasses professional identity details such as names and
            corporate affiliations, contact parameters including digital and
            telephonic addresses, and technical metadata generated during
            interactions with our digital platforms.
          </p>

          <h2 style={{ marginTop: "40px" }}>Legal Grounds for Processing</h2>
          <p>
            Our processing of information is governed by defined legal
            variables. This includes the performance of a contract, compliance
            with statutory obligations, and legitimate business interests that
            do not override privacy rights.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Data Security and Technical Safeguards
          </h2>
          <p>
            Tharollo employs advanced technical and organizational measures to
            ensure the integrity and confidentiality of the data ecosystem. Our
            security architecture includes encrypted data transmission,
            restricted access controls, and regular audits.
          </p>

          <h2 style={{ marginTop: "40px" }}>Retention and Disposal</h2>
          <p>
            Personal information is retained only for as long as necessary for
            the purpose it was collected or as required by law. Data is securely
            deleted or de-identified once no longer needed.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            International Transfers and Third Parties
          </h2>
          <p>
            Data may be processed via cloud infrastructure outside South Africa.
            We ensure equivalent protection standards and do not sell or lease
            personal data to third parties.
          </p>

          <h2 style={{ marginTop: "40px" }}>Rights of the Data Subject</h2>
          <p>
            Individuals may request access, correction, objection, or deletion
            of their personal data by contacting our Information Officer.
          </p>

          <p
            style={{
              marginTop: "60px",
              fontWeight: "bold",
              color: "#003366",
            }}
          >
            Inquiries regarding this statement may be directed to
            privacy@tharollo.com
          </p>

          <p style={{ fontStyle: "italic", color: "#888" }}>
            Version 2.1 | Revised January 2026
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
