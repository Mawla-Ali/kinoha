import ScrollLink from "../Elements/kakera/ScrollLink";
import Navigation from "../Fragments/Nav";
const HeroSection = () => {
  return (
    <>
      <ScrollLink />
      <div className="relative" id="Home">
        <div className="min-h-screen">
          <div className="top-0 z-50">
            <Navigation></Navigation>
          </div>
          <div className="relative min-h-screen bg-[url('/Img/Hero/hero.png')] bg-cover bg-center">
            {/* Overlay (mask / gradient) */}
            <div
              className="absolute inset-0 bg-linear-to-b from-[#7400F50D] via-[#7400F526] to-[#7400F573]"
              style={{
                background: `linear-gradient(
                           to bottom,
                          rgba(116, 0, 245, 0.01),
                          rgba(116, 0, 245, 0.05),
                          rgba(116, 0, 245, 0.35)
                         )`,
              }}
            />
            {/* CONTENT */}
            <div className="relative z-10 flex justify-center">
              <div className="bg-[#F500ED] w-xs mt-64 p-8 rounded-3xl shadow-xl">
                <h2 className="text-white text-2xl text-center font-bold">Welcome to Kinoha Website</h2>
              </div>
            </div>
            <div className="relative z-10 flex justify-center mt-8">
              <p className="text-xl font-bold text-[#ffffff] z-10 flex justify-center lg:text-6xl absolute">Let's make a friend from anime</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
