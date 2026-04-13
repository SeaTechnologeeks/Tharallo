import Banner from "../components/Banner";
import bgVideo from "../assets/images/engineering.jpg";

import EngineeringReportSection from "../components/EngineeringReportSection";

const Engineering = () => {
  return (
    <div>
      <Banner
        title="Engineering Consulting"
        description="Structural logic and industrial precision for complex infrastructure and systems."
        buttonText=""
        targetId="services"
        mediaSrc={bgVideo}
        isVideo={false}
      />
      <EngineeringReportSection />
    </div>
  );
};

export default Engineering;
