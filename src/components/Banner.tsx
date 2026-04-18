import bgVideo from "../assets/videos/earth-bg.mp4";

const Banner = ({
  title = "Solving the Enterprise Equation",
  description = "We apply rigorous logic and specialized engineering to navigate complex business landscapes across the continent.",
  // buttonText = "Explore Our Expertise",
  mediaSrc = bgVideo, // can be image OR video
  isVideo = true,
}) => {
  // const handleScroll = () => {
  //   const section = document.getElementById(targetId);
  //   section?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <header className="hero">
      <div className="video-background">
        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={mediaSrc}
            alt="banner"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}

        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {/* {buttonText && <button onClick={handleScroll}>{buttonText}</button>} */}
      </div>
    </header>
  );
};

export default Banner;
