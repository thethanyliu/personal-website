import ReactGA from "react-ga4";

export function analyticsEventTracker(category, action) {
  ReactGA.event({
    category: category,
    action: action,
  });
}
