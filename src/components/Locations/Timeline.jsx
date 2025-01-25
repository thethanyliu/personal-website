import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TIMELINE_ELEMENTS } from "../Constants";
import { ReactComponent as City } from "../../assets/img/city.svg";
import { ReactComponent as Town } from "../../assets/img/town.svg";

function Timeline() {
  return (
    <VerticalTimeline>
      {TIMELINE_ELEMENTS.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          icon={element.icon === "town" ? <Town /> : <City />}
          iconStyle={{ background: "#afafaf" }}
          date={element.time}
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
