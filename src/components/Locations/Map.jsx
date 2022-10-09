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
  
  function Map() {
    const [one, setOne] = useState(false);

    function toggleOne(event) {
      setOne((prevState)=>{return (!prevState)});
      console.log(event)
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
          <Marker key={markers[0].id} coordinates={markers[0].coordinates} onMouseEnter={toggleOne} onMouseLeave={toggleOne}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5} />
            <text textAnchor="middle" y={markers[0].markerOffset} className={one? "text-slate-50 text-sm font-semibold" : "hidden"}>{markers[0].name}</text>
          </Marker>
          <Marker key={markers[1].id} coordinates={markers[1].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5} />
          </Marker>
          <Marker key={markers[2].id} coordinates={markers[2].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5}></circle>
          </Marker>
          <Marker key={markers[3].id} coordinates={markers[3].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5}></circle>
          </Marker>
          <Marker key={markers[4].id} coordinates={markers[4].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5}></circle>
          </Marker>
          <Marker key={markers[5].id} coordinates={markers[5].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5}></circle>
          </Marker>
          <Marker key={markers[6].id} coordinates={markers[6].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5}></circle>
          </Marker>
          <Marker key={markers[7].id} coordinates={markers[7].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5}></circle>
          </Marker>
          <Marker key={markers[8].id} coordinates={markers[8].coordinates}>
            <circle r={2.5} fill="#fff" stroke="storm" strokeWidth={1.5}></circle>
          </Marker>
          
        {/* //   {markers.map((marker) => ( */}
        {/* //     <Marker key={marker.id} coordinates={marker.coordinates}> */}
        {/* //       <circle r={2.5} fill="#fff" stroke="#0f0f0f" strokeWidth={1.5}/> */}
        //       {/* <text textAnchor="middle" y={marker.markerOffset}>
        //         {marker.name}
        //       </text> */}
        {/* //     </Marker> */}
          {/* ))} */}
        </ComposableMap>
      </div>
    );
  }
  
  export default Map;
  