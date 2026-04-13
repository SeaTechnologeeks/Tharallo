import softwaredev from "../assets/images/tech.jpg";
import iot from "../assets/images/engineering.jpg";
import ai from "../assets/images/tech.jpg";
import digitaltrans from "../assets/images/management.jpg";
import techarch from "../assets/images/engineering.jpg";
import ux from "../assets/images/tech.jpg";
import gaming from "../assets/images/engineering.jpg";
import mobile from "../assets/images/management.jpg";
import enterprise from "../assets/images/engineering.jpg";
import platform from "../assets/images/engineering.jpg";

const items = [
  {
    title: "Software Development",
    text: "Building scalable, robust, and custom software solutions designed to solve complex business equations and drive operational efficiency.",
    video: softwaredev,
    link: "Software Development.html",
  },
  {
    title: "Internet of Things (IoT)",
    text: "Connecting the physical and digital worlds. We implement smart sensor networks and data pipelines to monitor industrial variables in real-time.",
    video: iot,
    link: "Internet of Things.HTML",
  },
  {
    title: "Artificial Intelligence (AI)",
    text: "Harnessing machine learning and predictive analytics to automate decision-making processes and unlock deep insights from enterprise data.",
    video: ai,
    link: "Artitificial Intelligence.HTML",
  },
  {
    title: "Digital Transformation",
    text: "Reimagining business models for the digital age. We guide the structural shift from legacy systems to agile, technology-driven operations.",
    video: digitaltrans,
    link: "Digital Transformation.HTML",
  },
  {
    title: "Technology Architecture",
    text: "Designing the structural integrity of your IT ecosystem. We align technical components to support high-performance business requirements.",
    video: techarch,
    link: "Technology Architecture.HTML",
  },
  {
    title: "User Experience (UX)",
    text: "Optimizing the interface between humans and machines. We design intuitive digital journeys that increase engagement and reduce friction.",
    video: ux,
    link: "User Experience.HTML",
  },
  {
    title: "Gaming & Immersive Tech",
    text: "Leveraging gamification and immersive environments for training, simulation, and high-impact consumer engagement.",
    video: gaming,
    link: "Game-Immersive.HTML",
  },
  {
    title: "Mobile Applications",
    text: "Developing native and cross-platform mobile solutions that extend enterprise capabilities directly into the hands of your workforce and customers.",
    video: mobile,
    link: "Mobile Applications.HTML",
  },
  {
    title: "Enterprise Applications",
    text: "Deploying and integrating mission-critical applications (ERP, CRM) that streamline workflows across the entire organization.",
    video: enterprise,
    link: "Enterprise Applications.HTML",
  },
  {
    title: "Platform Engineering",
    text: "Standardizing the internal developer experience. We build and maintain the platforms that allow development teams to deliver value with speed and security.",
    video: platform,
    link: "Platform Engineering.HTML",
  },
];

export default function TechnologyReportSection() {
  return (
    <section className="report-section">
      <div className="report-container">
        {items.map((item, index) => (
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
      </div>
    </section>
  );
}
