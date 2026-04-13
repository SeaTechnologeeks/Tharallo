import analysis from "../assets/images/engineering.jpg";
import functional from "../assets/images/tech.jpg";
import project from "../assets/images/management.jpg";
import change from "../assets/images/engineering.jpg";
import sustainability from "../assets/images/tech.jpg";
import strategy from "../assets/images/management.jpg";
import architecture from "../assets/images/engineering.jpg";
import engineering from "../assets/images/tech.jpg";
import techwriting from "../assets/images/management.jpg";

const reports = [
  {
    title: "Business Analysis",
    text: "We identify business needs and determine solutions to business problems. Our analysis provides the data-driven foundation required for every strategic move.",
    video: analysis,
    link: "Business Analysis.HTML",
  },
  {
    title: "Functional Analysis",
    text: "Mapping the technical requirements of your business functions to ensure that your processes are built for peak performance and accuracy.",
    video: functional,
    link: "Functional Analysis.HTML",
  },
  {
    title: "Project Delivery & Management",
    text: "From inception to completion, we apply rigorous PMO standards to ensure projects are delivered on time, within scope, and above expectations.",
    video: project,
    link: "Project Management.HTML",
  },
  {
    title: "Change Management",
    text: "Navigating the human element of corporate evolution. We minimize friction and maximize adoption during major organizational shifts.",
    video: change,
    link: "Change Management.HTML",
  },
  {
    title: "Sustainability",
    text: "Integrating ESG and sustainable practices into your core business model to ensure long-term viability in a changing global landscape.",
    video: sustainability,
    link: "Sustainability.HTML",
  },
  {
    title: "Business Strategy",
    text: "Architecting the high-level roadmaps that define your market position and competitive advantage across the continent.",
    video: strategy,
    link: "Business Strategy.HTML",
  },
  {
    title: "Business Architecture",
    text: "Creating the structural blueprint of your organization to align business goals with operational capabilities and technical infrastructure.",
    video: architecture,
    link: "Business Architecture.HTML",
  },
  {
    title: "Business Process Engineering",
    text: "Rethinking and redesigning workflows to achieve dramatic improvements in critical measures of performance such as cost, quality, and speed.",
    video: engineering,
    link: "Business Process Engineering.HTML",
  },
  {
    title: "Technical Writing",
    text: "Translating complex operational and engineering variables into clear, high-impact documentation. We produce rigorous technical reports, manuals, and white papers that bridge the communication gap between subject matter experts and executive stakeholders.",
    video: techwriting,
    link: "Technical Writing.HTML",
  },
];

export default function ManagementReportSection() {
  return (
    <section className="report-section">
      <div className="report-container">
        {reports.slice(0, 8).map((item, index) => (
          <div className="report-row" key={index}>
            <div className="report-text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>

            <div className="report-visual">
              <div className="video-thumbnail-wrapper">
                <video autoPlay muted loop playsInline className="row-video">
                  <source src={item.video} type="video/mp4" />
                </video>

                <a href={item.link} className="learn-more-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Technical Writing (kept separate if different layout needed) */}
        <div className="report-row">
          <div className="report-text">
            <h2>Technical Writing</h2>
            <p>
              Translating complex operational and engineering variables into
              clear, high-impact documentation. We produce rigorous technical
              reports, manuals, and white papers that bridge the communication
              gap between subject matter experts and executive stakeholders.
            </p>
          </div>

          <div className="report-visual">
            <div className="video-thumbnail-wrapper">
              <video autoPlay muted loop playsInline className="row-video">
                <source src={techwriting} type="video/mp4" />
              </video>

              <a href="Technical Writing.HTML" className="learn-more-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
