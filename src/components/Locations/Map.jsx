import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useReducer } from "react";
import { MAP_MARKERS } from "../Constants";
import features from "./features.json";

function reducer(state, action) {
  return state.map((s, i) => (i === action.type ? !s : s));
}

function Map() {
  const [state, dispatch] = useReducer(
    reducer,
    Array(MAP_MARKERS.length).fill(false)
  );

  return (
    <ComposableMap>
      <Geographies geography={features}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              className="fill-[#6e6b6b] dark:fill-[#d37559]"
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
      {MAP_MARKERS.map((marker, index) => (
        <Marker
          key={index}
          coordinates={marker.coordinates}
          onMouseEnter={() => dispatch({ type: index })}
          onMouseLeave={() => dispatch({ type: index })}
        >
          <circle r={2.5} fill="#fff" stroke="#0c2431" strokeWidth={1.5} />
          <text
            textAnchor="middle"
            y={marker.markerOffset || -10}
            className={state[index] ? "" : "hidden"}
            style={{ fill: "#fff", fontSize: 10 }}
          >
            {marker.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}

export default Map;
