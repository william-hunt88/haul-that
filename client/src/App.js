import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Map from "./components/Map"
// import Service from './components/Service';
import { BrowserRouter as Router } from 'react-router-dom';
// import Booking from './components/Booking/Booking';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Profile />
      {/* <Service /> */}
      <Map />
      {/* <Home /> */}

      
    </div>
    </Router>
  );
}

export default App;
