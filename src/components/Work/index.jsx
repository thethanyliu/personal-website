import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useIsTimelineCollapsed } from "../../utils/hook";
import { WORK_INFORMATION } from "../Constants";
import { ReactComponent as WorkIcon } from "../../assets/img/work.svg";

const Work = () => {
  const { isTimelineCollapsed } = useIsTimelineCollapsed();

  return (
    <div name="work" className="flex flex-col my-8">
      <h1 className="text-4xl font-semibold text-center py-10">
        Work Experience
      </h1>
      <VerticalTimeline animate={false}>
        {WORK_INFORMATION.map((work, index) => (
          <VerticalTimelineElement
            key={index}
            icon={<WorkIcon />}
            iconStyle={{ background: "#afafaf" }}
            date={`${work.time.start} - ${
              work.time.isCurrent ? "Present" : work.time.end
            }`}
            dateClassName={`text-stone-900 dark:${
              isTimelineCollapsed ? "text-stone-900" : "text-slate-200"
            }`}
            className="vertical-timeline-element"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-normal dark:text-stone-900 tracking-wider">
                {work.title}
              </h3>
              <span className="dark:text-stone-900">{work.desc}</span>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Work;
