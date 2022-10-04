import { useState } from "react";
import Backdrop from "./Map/Backdrop";
import Map from "./Map/Map";
import map_image from "../assets/img/map.PNG";

function MapOverlay() {
  const [mapIsOpen, setmapIsOpen] = useState(false);

  // function onImgLoad({ target:img }) {
  //   const { offsetHeight, offsetWidth } = img;

  // }

  function openMapHandler() {
    setmapIsOpen(true);
  }

  function closeMapHandler() {
    setmapIsOpen(false);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${map_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="hidden md:flex group m-auto min-w-[350px] min-h-[250px] rounded-lg"
    >
      <div className="opacity-0 group-hover:opacity-100 text-center min-w-[350px] min-h-[250px] pt-20 bg-[#fff] rounded-lg">
        <button
          className="text-black bg-transparent border-[2px] border-black p-5 rounded-md"
          onClick={openMapHandler}
        >
          Where I've Been
        </button>
      </div>
      {mapIsOpen && <Map close={closeMapHandler}/>}
      {mapIsOpen && <Backdrop close={closeMapHandler} />}
    </div>
  );
}

export default MapOverlay;
