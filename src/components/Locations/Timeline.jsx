import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeLineElements } from "./TimelineElements";
import { ReactComponent as City } from "../../assets/img/city.svg";
import { ReactComponent as Town } from "../../assets/img/town.svg";

function Timeline() {
  let iconStyles = {background: "#afafaf"}

  return (
    <div>
      <VerticalTimeline>
        {timeLineElements.reverse().map((element) => {
            let isTownIcon = element.icon === "town";
          return (<VerticalTimelineElement key={element.id} icon={isTownIcon? <Town /> : <City /> } iconStyle={iconStyles} >
            <h1 className="dark:text-stone-900">{element.title}</h1>
            <p className="dark:text-stone-900">{element.time}</p>
          </VerticalTimelineElement>);
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
