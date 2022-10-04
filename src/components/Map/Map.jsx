import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

const markers = [
  {
    id: "m1",
    markerOffset: -15,
    name: "Grande Prairie",
    coordinates: [-118.7885, 55.1707],
  },
  {
    id: "m2",
    markerOffset: -15,
    name: "Regina",
    coordinates: [-104.6189, 50.4452],
  },
  {
    id: "m3",
    markerOffset: -15,
    name: "Laramie",
    coordinates: [-105.5911, 41.3114],
  },
  {
    id: "m4",
    markerOffset: -15,
    name: "Surrey",
    coordinates: [-122.849, 49.1913],
  },
  {
    id: "m5",
    markerOffset: -15,
    name: "Katy",
    coordinates: [-95.8245, 29.7858],
  },
  {
    id: "m6",
    markerOffset: -15,
    name: "GP",
    coordinates: [-118.7885, 55.1707],
  },
  {
    id: "m7",
    markerOffset: -15,
    name: "Montreal",
    coordinates: [-73.5674, 45.5019],
  },
  {
    id: "m8",
    markerOffset: -15,
    name: "Waterloo",
    coordinates: [-80.5204, 43.4643],
  },
  {
    id: "m9",
    markerOffset: -15,
    name: "Edmonton",
    coordinates: [-113.4937, 53.5461],
  },
  {
    id: "m10",
    markerOffset: -15,
    name: "Fushun",
    coordinates: [123.94363, 41.88669],
  },
];
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

function Map(props) {
  const [textIsShowing, setTextIsShowing] = useState(false);


  const showTextHandler = (event) => {
    setTextIsShowing(true);
    console.log(event.pageX)
  }

  const hidetextHander = () => {
    setTextIsShowing(false);
  }

  return (
    <div className="fixed text-center bg-white m-4 z-20 map min-w-[600px] rounded-lg">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
            ))
          }
        </Geographies>
        {markers.map((marker) => (
          <Marker key={marker.name} coordinates={marker.coordinates}>
            <circle r={3} fill="#fff" stroke="#0f0f0f" strokeWidth={1.5} onMouseEnter={showTextHandler} onMouseLeave={hidetextHander}/>
            <text textAnchor="middle" y={marker.markerOffset} className={textIsShowing ? "" : "hidden"}>
              {marker.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      <button className="text-black bg-transparent border-[2px] border-black p-3 rounded-md" onClick={props.close}>Exit</button>
    </div>
  );
}

export default Map;
