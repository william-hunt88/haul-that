
import {React, useState} from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Map = () => {

  const [currentPosition, setCurrentPosition] = useState('')


  //   const locations = locations.map((location) => {
  //       return [
  //         {
  //           name: "Location 1",
  //           location: {
  //             // lat: {location.lat},
  //             // lng: {location.long},
  //           },
  //         },
  //       ]
  //   })

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

// const getLocation = async function() {
//   navigator.geolocation.getCurrentPosition( async function (position) {
//    var pos = {
//      lat: position.coords.latitude,
//      lng: position.coords.longitude
//     }

//     await setCurrentPosition(pos)
//   })
// }

// getLocation()

// console.log(currentPosition)



  // Get users location //
  const defaultCenter = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB_c7GFN8Edf79UFOfpLna7LNX4X7MALHM">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {/* {locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })} */}
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
