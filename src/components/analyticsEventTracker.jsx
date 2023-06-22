import ReactGA from "react-ga4";

function useAnalyticsEventTracker(category="Some category", action="Some action") {
  ReactGA.event({
    category: category,
    action: action
  });
}
export default useAnalyticsEventTracker;
