import Banner from "../components/Banner";
import bgVideo from "../assets/images/management.jpg";
import ManagementReportSection from "../components/ManagementReportSection";

const Management = () => {
  return (
    <div>
      <Banner
        title="Management Consulting"
        description="Bridging the gap between operational reality and strategic vision."
        buttonText=""
        targetId="services"
        mediaSrc={bgVideo}
        isVideo={false}
      />
      <ManagementReportSection />
    </div>
  );
};

export default Management;
