import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useIsTimelineCollapsed } from "../../utils/hook";
import { TIMELINE_ELEMENTS } from "../Constants";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as City } from "../../assets/img/city.svg";
import { ReactComponent as Town } from "../../assets/img/town.svg";

function Timeline() {
  const { isTimelineCollapsed } = useIsTimelineCollapsed();

  return (
    <VerticalTimeline>
      {TIMELINE_ELEMENTS.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          icon={element.icon === "town" ? <Town /> : <City />}
          iconStyle={{ background: "#afafaf" }}
          date={element.time}
          dateClassName={`text-stone-900 dark:${
            isTimelineCollapsed ? "text-stone-900" : "text-slate-200"
          }`}
          className="vertical-timeline-element"
        >
          <h3 className="text-lg font-normal dark:text-stone-900 tracking-wider">
            {element.title}
          </h3>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
