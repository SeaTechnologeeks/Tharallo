const CookiePolicy = () => {
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
          <h1>Cookie Policy</h1>
          <p>Transparency in Digital Interaction and Data Variables</p>
        </div>
      </header>

      {/* CONTENT SECTION */}
      <section className="report-section">
        <div
          className="report-container"
          style={{ maxWidth: "900px", textAlign: "justify" }}
        >
          <h2>Introduction to Digital Identifiers</h2>
          <p>
            Tharollo Consulting Services utilizes cookies and similar tracking
            technologies to enhance the logical flow and performance of our
            digital interface. Cookies are small text files placed on your
            device that allow our systems to recognize your browser and remember
            certain information.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Essential and Functional Cookies
          </h2>
          <p>
            Certain cookies are strictly necessary for the structural integrity
            of our website. These essential identifiers enable core
            functionality such as secure log-in, session management, and load
            balancing. Functional cookies allow us to remember preferences such
            as language or region.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Performance and Analytical Metrics
          </h2>
          <p>
            Analytical cookies collect aggregated data on user interactions to
            help us improve website performance, navigation, and content
            relevance.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Targeting and Professional Engagement
          </h2>
          <p>
            Targeting cookies help us understand user interests across our
            consulting verticals and deliver more relevant professional
            insights.
          </p>

          <h2 style={{ marginTop: "40px" }}>Third-Party Integration</h2>
          <p>
            Third-party services may set cookies when interacting with embedded
            content such as videos or social media plugins. These are governed
            by their own policies.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Management of Cookie Preferences
          </h2>
          <p>
            Users can manage or disable cookies through browser settings,
            although this may affect website functionality.
          </p>

          <p
            style={{
              marginTop: "60px",
              fontWeight: "bold",
              color: "#003366",
            }}
          >
            For further clarification on our digital data practices, please
            contact privacy@tharollo.com
          </p>

          <p style={{ fontStyle: "italic", color: "#888" }}>
            Document Reference: TH-CK-2026 | Last Updated: January 2026
          </p>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
