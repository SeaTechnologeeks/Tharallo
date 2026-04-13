import industrial from "../assets/images/tech.jpg";
import mining from "../assets/images/engineering.jpg";

const items = [
  {
    title: "Industrial Engineering",
    text: "Optimizing complex processes, systems, and organizations by developing, improving, and implementing integrated systems of people, money, knowledge, and equipment. We focus on maximizing productivity through mathematical and engineering rigor.",
    video: industrial,
    link: "Industrial Engineering.HTML",
  },
  {
    title: "Mining Engineering",
    text: "Providing strategic advisory on the extraction of geological materials. Our focus is on operational safety, environmental sustainability, and the logical optimization of resource recovery in diverse African terrains.",
    video: mining,
    link: "Mining Engineering.HTML",
  },
];

export default function EngineeringReportSection() {
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
