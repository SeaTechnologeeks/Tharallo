export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#001a33",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Contact Us</h1>
        <p style={{ marginTop: 10, fontSize: "1.1rem", opacity: 0.9 }}>
          Strategic advisory services for modern enterprises.
        </p>
      </div>

      {/* Form Section */}
      <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ color: "#003366" }}>Inquiry Submission</h2>
        <p style={{ color: "#555" }}>
          Please complete the form below to initiate a consultation with our
          team.
        </p>

        <form style={{ marginTop: 30 }}>
          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", fontWeight: "bold", color: "#003366" }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: "100%",
                padding: 12,
                marginTop: 5,
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", fontWeight: "bold", color: "#003366" }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: 12,
                marginTop: 5,
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", fontWeight: "bold", color: "#003366" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              style={{
                width: "100%",
                padding: 12,
                marginTop: 5,
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", fontWeight: "bold", color: "#003366" }}
            >
              Details of Inquiry
            </label>
            <textarea
              name="details"
              required
              style={{
                width: "100%",
                padding: 12,
                marginTop: 5,
                border: "1px solid #ccc",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
          </div>

          <input
            type="submit"
            value="Submit"
            style={{
              backgroundColor: "#003366",
              color: "white",
              padding: "15px 50px",
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        </form>

        <hr
          style={{ margin: "60px 0", border: 0, borderTop: "1px solid #eee" }}
        />

        {/* Contact Info */}
        <div style={{ textAlign: "left", marginBottom: 60 }}>
          <h2 style={{ color: "#003366" }}>Company Contact Information</h2>
          <p style={{ margin: "8px 0" }}>
            <strong>Telephone:</strong> +27 (0) 12 555 0192
          </p>
          <p style={{ margin: "8px 0" }}>
            <strong>Email:</strong> advisory@tharollo.com
          </p>

          <div style={{ marginTop: 35 }}>
            <h4
              style={{
                color: "#888",
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Connect with us
            </h4>

            <div
              style={{ display: "flex", gap: 20, fontSize: 24, marginTop: 15 }}
            >
              <a href="#" style={{ color: "#25D366" }}>
                <i className="fa-brands fa-whatsapp" />
              </a>

              <a href="#" style={{ color: "#000" }}>
                <i className="fa-brands fa-x-twitter" />
              </a>

              <a href="#" style={{ color: "#0077b5" }}>
                <i className="fa-brands fa-linkedin" />
              </a>

              <a href="#" style={{ color: "#E4405F" }}>
                <i className="fa-brands fa-instagram" />
              </a>

              <a href="#" style={{ color: "#1877F2" }}>
                <i className="fa-brands fa-facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
