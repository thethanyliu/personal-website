import TechItem from "./TechItem";
import { TECH_STACK } from "../Constants";

function Tech() {
  return (
    <div name="tech" className="flex flex-col px-5 md:px-24 lg:px-36 xl:px-60">
      <div>
        <h1 className="text-3xl font-semibold drop-shadow-md">
          What I Work With
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {TECH_STACK.map((element, index) => {
          return (
            <TechItem key={index} title={element.title} image={element.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Tech;
