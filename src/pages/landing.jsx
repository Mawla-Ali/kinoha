import Tentang from "../../components/Layout/About";
import Kontak from "../../components/Layout/Contact";
import AkhirLanding from "../../components/Layout/Footer";
import HeroSection from "../../components/Layout/Hero";
const LandingPage = (props) => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="w-full">
        <HeroSection />
        <Tentang />
        <Kontak />
        <AkhirLanding />
      </div>
    </div>
  );
};

export default LandingPage;
