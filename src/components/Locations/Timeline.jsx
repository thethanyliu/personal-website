import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeLineElements } from "./TimelineElements";
import { ReactComponent as City } from "../../assets/img/city.svg";
import { ReactComponent as Town } from "../../assets/img/town.svg";

function Timeline() {
    let iconStyles = {background: "teal"}

  return (
    <div>
      <VerticalTimeline>
        {timeLineElements.map((element) => {
            let isCityIcon = element.icon === "city";
            let isTownIcon = element.icon === "town";
          return (<VerticalTimelineElement key={element.id} icon={isTownIcon? <Town /> : <City />} iconStyle={iconStyles}>
            <h1 className="vertical-timeline-element-title">{element.title}</h1>
            <p className="vertical-timeline-element-subtitle">{element.time}</p>
          </VerticalTimelineElement>);
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
