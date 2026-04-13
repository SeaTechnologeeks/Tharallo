import Banner from "../components/Banner";
import bgVideo from "../assets/images/tech.jpg";
import TechnologyReportSection from "../components/TechnologyReportSection";

const Technology = () => {
  return (
    <div>
      <Banner
        title="Technology Consulting"
        description="Advancing enterprise logic through digital intelligence and engineering excellence."
        buttonText=""
        targetId="services"
        mediaSrc={bgVideo}
        isVideo={false}
      />
      <TechnologyReportSection />
    </div>
  );
};

export default Technology;
