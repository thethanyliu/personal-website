import { useState, useEffect } from "react";
import { MainView, LoadingScreen } from "./components";

import ReactGA from "react-ga4";
ReactGA.initialize("G-BRR39CPNQ2");

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return <>{loading ? <LoadingScreen /> : <MainView />}</>;
}

export default App;
