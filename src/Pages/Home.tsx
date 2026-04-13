import Banner from "../components/Banner";
import Services from "../components/Service";
import bgVideo from "../assets/videos/earth-bg.mp4";

function Home() {
  return (
    <>
      <Banner mediaSrc={bgVideo} />
      <Services />
    </>
  );
}

export default Home;
