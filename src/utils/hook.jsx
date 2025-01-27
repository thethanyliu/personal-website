import { useState, useEffect } from "react";

export const useIsTimelineCollapsed = () => {
  const [isTimelineCollapsed, setIsTimelineCollapsed] = useState(false);

  const handleResize = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1170) {
      setIsTimelineCollapsed((_) => true);
    } else {
      setIsTimelineCollapsed((_) => false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return { isTimelineCollapsed };
};
