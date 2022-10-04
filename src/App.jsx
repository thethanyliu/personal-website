import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech/Tech";


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
    <Tech /></>)
    }
  </>
}

export default App;
