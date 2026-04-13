const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <header style={{ height: "40vh", position: "relative" }}>
        <div className="video-background">
          <img
            src={"aboutHero"}
            alt="About Tharollo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            className="video-overlay"
            style={{ background: "rgba(0, 26, 51, 0.9)" }}
          ></div>
        </div>

        <div className="hero-content">
          <h1>Our Identity</h1>
          <p>
            Deciphering Enterprise Complexity through Logic and Local Expertise
          </p>
        </div>
      </header>

      {/* CONTENT SECTION */}
      <section className="report-section">
        <div
          className="report-container"
          style={{ maxWidth: "900px", textAlign: "justify" }}
        >
          <h2>The Essence of Tharollo</h2>
          <p>
            Tharollo Consulting Services was established on the principle that
            every organizational challenge is a solvable equation. The name
            Tharollo, a Sesotho term for "Solution," reflects our core mission:
            to provide definitive answers to the variables that hinder corporate
            and industrial growth. We operate as a high-end strategic partner,
            moving beyond traditional advisory to deliver logic-based outcomes
            that are both mathematically sound and operationally viable.
          </p>

          <h2 style={{ marginTop: "40px" }}>The Logic of f(x)</h2>
          <p>
            Our brand is anchored in the functional notation f(x). In our
            methodology, the function (f) represents our expert advisory, and
            the variable (x) represents the specific challenges and ambitions of
            the modern enterprise. By applying our proprietary frameworks to
            these variables, we produce results that are predictable, scalable,
            and sustainable.
          </p>

          <h2 style={{ marginTop: "40px" }}>Our African Mandate</h2>
          <p>
            While our standards are benchmarked against global excellence,
            Tharollo is a firm profoundly rooted in the African continent. We
            recognize that the African business environment requires a unique
            synthesis of global best practices and local intelligence.
          </p>

          <h2 style={{ marginTop: "40px" }}>Multidisciplinary Integration</h2>
          <p>
            We believe that strategic excellence cannot exist in a vacuum.
            Therefore, Tharollo integrates three critical pillars of modern
            business: Management, Technology, and Engineering.
          </p>

          <h2 style={{ marginTop: "40px" }}>
            Professional Excellence and Ethics
          </h2>
          <p>
            Integrity is the constant in all our business equations. We operate
            with a commitment to absolute transparency, maintaining the highest
            ethical standards in our dealings with clients, partners, and
            regulators.
          </p>

          <p
            style={{
              marginTop: "60px",
              fontWeight: "bold",
              color: "#003366",
            }}
          >
            Discover the solution for your enterprise variables.
          </p>

          <p style={{ fontStyle: "italic", color: "#888" }}>
            Tharollo Consulting Services | Advanced Strategic Advisory
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
