import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = ({ jobs, loading }) => {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    console.log(item);
    setSelected(item[0]);
  };
  // const [sites, setSites] = useState([]);
  // console.log(loading);
  // if (!loading) {
  //   console.log(jobs);
  //   setSites[jobs[0]];
  // }

  console.log(selected);

  const handleMapRender = () => {
    if (!loading) {
      const locations = jobs[0].map((location) => {
        console.log(console.log(location._id));
        return [
          {
            name: location._id,
            location: {
              lat: parseFloat(location.pickup.lat),
              lng: parseFloat(location.pickup.lng),
            },
          },
        ];
      });

      return (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {locations.map((item) => {
            return (
              <Marker
                key={item[0].name}
                position={item[0].location}
                onClick={() => onSelect(item)}
              />
            );
          })}
          {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
          )}
        </GoogleMap>
      );
    }
  };

  const [position, setPosition] = useState({
    lat: 36.1627,
    lng: 86.7816,
  });

  const mapStyles = {
    height: "50vh",
    width: "80%",
  };

  // Get users location and set
  navigator.geolocation.getCurrentPosition(function (position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setPosition(pos);
  });

  const defaultCenter = {
    lat: position.lat,
    lng: position.lng,
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="AIzaSyB_c7GFN8Edf79UFOfpLna7LNX4X7MALHM">
        {handleMapRender()}
      </LoadScript>
    </div>
  );
};
export default Map;
