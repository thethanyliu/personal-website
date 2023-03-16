import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Map from "./Map";
import Timeline from "./Timeline";

function Locations() {
  // const { ref: refMap, inView: mapInView } = useInView({ triggerOnce: true });
  const [toggle, setToggle] = useState(false);

  const toggleStyles = "m-auto h-[20px] w-[50px] rounded-[50px] cursor-pointer";

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div
      name="places"
      className="flex flex-col pt-8 px-5 md:px-20 lg:px-42 xl:px-56"
    >
      <>
        <h1 className="text-4xl font-semibold text-center py-10">
          Where to Next
        </h1>

        <div
          className={
            toggle
              ? "second bg-gradient-to-t from-[#ac9d9d] to-[#f8f8fa] dark:bg-gradient-to-t dark:from-[#194a50] dark:to-[#d8a28c] " +
                toggleStyles
              : "relative bg-gradient-to-t from-[#6f7c85] to-[#c0c2ce] dark:bg-gradient-to-t dark:from-[#be375f] dark:to-[#d8a28c] " +
                toggleStyles
          }
          onClick={handleToggle}
        >
          <div className="notch"></div>
        </div>
        <div className="text-center text-2xl pt-3">
          {!toggle ? "See Timeline" : "See Map"}
        </div>
      </>

      <>
        <Map />
      </>
      <div className={toggle ? "pb-10" : "hidden"}>
        <Timeline />
      </div>
    </div>
  );
}

export default Locations;
