import React from "react";

function TechItem(props) {
  return (
      <div className="transition ease-in-out delay-120 flex flex-col dark:bg-[#dde7ee] bg-[#e5e6eb] rounded-md drop-shadow-2xl hover:scale-105 max-w-[280px] mb-5 md:mb-0 py-10">
        <div className="flex justify-center">
          <img
            src={props.image}
            alt={props.title}
            className={`{h-[50px] ${
              props.title !== "Tailwind CSS" ? "w-[50px]" : "w-[70px]"
            }`}
          />
        </div>
        <div>
          <h1 className="text-center text-xl text-gray-800 font-semibold pt-2">
            {props.title}
          </h1>
        </div>
      </div>
  );
}

export default TechItem;
