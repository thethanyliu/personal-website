import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech/Tech";
import Locations from "./components/Locations/Locations";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ReactGA from "react-ga";
ReactGA.initialize("UA-244956969-1");
ReactGA.pageview("/homepage");

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="dark:bg-storm dark:text-slate-100 bg-[#d2d4dc] text-stone-900">
          <Navbar />
          <IntroSection />
          <AboutSection />
          <Locations />
          {/* <Projects /> */}
          <Tech />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
