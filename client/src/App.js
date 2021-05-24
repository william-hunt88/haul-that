import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Map from "./components/Map"
// import Service from './components/Service';

function App() {
  return (
    <div>
      <Home />
      <Nav />
      <Profile />
      {/* <Service /> */}
      <Map />
    </div>
  );
}

export default App;
