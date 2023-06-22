import ReactGA from "react-ga4";

function useAnalyticsEventTracker(category="Some category", action) {
  ReactGA.event({
    category,
    action,
  });
}
export default useAnalyticsEventTracker;
