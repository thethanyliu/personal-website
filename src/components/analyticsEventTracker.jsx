import ReactGA from "react-ga";

function useAnalyticsEventTracker (category="Some category") {
    const eventTracker = (action = "test action", label = "a label") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }
  export default useAnalyticsEventTracker;