import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useState } from "react";

const markers = [
  {
    id: "m1",
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
    name: "Laramie",
    coordinates: [-105.5911, 41.3114],
  },
  {
    id: "m4",
    name: "Surrey",
    coordinates: [-122.849, 49.1913],
  },
  {
    id: "m5",
    name: "Katy",
    coordinates: [-95.8245, 29.7858],
  },
  {
    id: "m7",
    markerOffset: -15,
    name: "Montreal",
    coordinates: [-73.5674, 45.5019],
  },
  {
    id: "m8",
    name: "Waterloo",
    coordinates: [-80.5204, 43.4643],
  },
  {
    id: "m9",
    name: "Edmonton",
    coordinates: [-113.4937, 53.5461],
  },
  {
    id: "m10",
    name: "Fushun",
    coordinates: [123.94363, 41.88669],
  },
];
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

function Map() {
  const offset = -10;
  const textStyle = {fill: "#fff", fontSize: 10};
  const radius = 2.5;
  const strokeWidth = 1.5;
  const strokeColor = "#0c2431";

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);

  function toggleOne() {

    setOne((prevState) => {
      return !prevState;
    });
  }

  function toggleTwo() {
    setTwo((prevState) => {
      return !prevState;
    });
  }

  function toggleThree() {
    setThree((prevState) => {
      return !prevState;
    });
  }

  function toggleFour() {
    setFour((prevState) => {
      return !prevState;
    });
  }

  function toggleFive() {
    setFive((prevState) => {
      return !prevState;
    });
  }

  function toggleSix() {
    setSix((prevState) => {
      return !prevState;
    });
  }

  function toggleSeven() {
    setSeven((prevState) => {
      return !prevState;
    });
  }

  function toggleEight() {
    setEight((prevState) => {
      return !prevState;
    });
  }

  function toggleNine() {
    setNine((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className="bg-storm">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#d37559" />
            ))
          }
        </Geographies>
        <Marker
          key={markers[0].id}
          coordinates={markers[0].coordinates}
          onMouseEnter={toggleOne}
          onMouseLeave={toggleOne}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth} />
          <text
            textAnchor="middle"
            y={offset}
            className={one ? "" : "hidden"}
            style={textStyle}
          >
            {markers[0].name}
          </text>
        </Marker>
        <Marker
          key={markers[1].id}
          coordinates={markers[1].coordinates}
          onMouseEnter={toggleTwo}
          onMouseLeave={toggleTwo}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth} />
          <text
            textAnchor="middle"
            y={offset}
            className={two ? "" : "hidden"}
            style={textStyle}
          >
            {markers[1].name}
          </text>
        </Marker>
        <Marker
          key={markers[2].id}
          coordinates={markers[2].coordinates}
          onMouseEnter={toggleThree}
          onMouseLeave={toggleThree}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth}></circle>
          <text
            textAnchor="middle"
            y={offset}
            className={three ? "" : "hidden"}
            style={textStyle}
          >
            {markers[2].name}
          </text>
        </Marker>
        <Marker
          key={markers[3].id}
          coordinates={markers[3].coordinates}
          onMouseEnter={toggleFour}
          onMouseLeave={toggleFour}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth}></circle>
          <text
            textAnchor="middle"
            y={offset}
            className={four ? "" : "hidden"}
            style={textStyle}
          >
            {markers[3].name}
          </text>
        </Marker>
        <Marker
          key={markers[4].id}
          coordinates={markers[4].coordinates}
          onMouseEnter={toggleFive}
          onMouseLeave={toggleFive}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth}></circle>
          <text
            textAnchor="middle"
            y={offset}
            className={five ? "" : "hidden"}
            style={{ fill: "#fff", fontSize: 10 }}
          >
            {markers[4].name}
          </text>
        </Marker>
        <Marker
          key={markers[5].id}
          coordinates={markers[5].coordinates}
          onMouseEnter={toggleSix}
          onMouseLeave={toggleSix}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth}></circle>
          <text
            textAnchor="middle"
            y={offset}
            className={six ? "" : "hidden"}
            style={textStyle}
          >
            {markers[5].name}
          </text>
        </Marker>
        <Marker
          key={markers[6].id}
          coordinates={markers[6].coordinates}
          onMouseEnter={toggleSeven}
          onMouseLeave={toggleSeven}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth}></circle>
          <text
            textAnchor="middle"
            y={offset}
            className={seven ? "" : "hidden"}
            style={{ fill: "#fff", fontSize: 10 }}
          >
            {markers[6].name}
          </text>
        </Marker>
        <Marker
          key={markers[7].id}
          coordinates={markers[7].coordinates}
          onMouseEnter={toggleEight}
          onMouseLeave={toggleEight}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth}></circle>
          <text
            textAnchor="middle"
            y={offset}
            className={eight ? "" : "hidden"}
            style={textStyle}
          >
            {markers[7].name}
          </text>
        </Marker>
        <Marker
          key={markers[8].id}
          coordinates={markers[8].coordinates}
          onMouseEnter={toggleNine}
          onMouseLeave={toggleNine}
        >
          <circle r={radius} fill="#fff" stroke={strokeColor} strokeWidth={strokeWidth}></circle>
          <text
            textAnchor="middle"
            y={offset}
            className={nine ? "" : "hidden"}
            style={textStyle}
          >
            {markers[8].name}
          </text>
        </Marker>

        {/* //   {markers.map((marker) => ( */}
        {/* //     <Marker key={marker.id} coordinates={marker.coordinates}> */}
        {/* //       <circle r={2.5} fill="#fff" stroke="#0f0f0f" strokeWidth={1.5}/> */}
        {/* <text textAnchor="middle" y={marker.markerOffset}>
        //         {marker.name}
        //       </text> */}
        {/* //     </Marker> */}
        {/* ))} */}
      </ComposableMap>
    </div>
  );
}

export default Map;