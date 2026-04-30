import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";
import Locations from "./Locations";
import Footer from "./Footer";
import Work from "./Work";

const MainView = () => {
  return (
    <div className="dark:bg-storm dark:text-slate-100 bg-[#d2d4dc] text-stone-900">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <Work />
      <Locations />
      <Footer />
    </div>
  );
};

export default MainView;
