import { HeroSection } from "./_components/hero-section";
import { HighlightImages } from "./_components/highlight-images";
import { WelcomeMessageSection } from "./_components/welcome-message-section";

const Home = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <HighlightImages />
      <WelcomeMessageSection />
    </div>
  );
};

export default Home;
