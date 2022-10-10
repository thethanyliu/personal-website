import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech/Tech";
import Locations from "./components/Locations/Locations";
import Footer from "./components/Footer";

import ReactGA from 'react-ga';
function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1');
  ReactGA.pageview('/homepage');
}


function App() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, []);

  return <>
    {loading ? (<LoadingScreen />) :
    (<><Navbar />
    <IntroSection />
    <AboutSection />
    <Locations />
    <Tech />
    <Footer />
    </>)
    }
  </>
}

export default App;
