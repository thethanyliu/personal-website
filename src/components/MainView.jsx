import React from "react";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";
import Tech from "./Tech/Tech";
import Locations from "./Locations/Locations";
import Contact from "./Contact";
import Footer from "./Footer";

const MainView = () => {
  return (
    <div className="dark:bg-storm dark:text-slate-100 bg-[#d2d4dc] text-stone-900">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <Locations />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainView;
