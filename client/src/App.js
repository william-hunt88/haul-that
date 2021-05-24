<<<<<<< HEAD
import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Landing from './components/Landing';

=======
import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Map from "./components/Map"
// import Service from './components/Service';
import { BrowserRouter as Router } from 'react-router-dom';
// import Booking from './components/Booking/Booking';
>>>>>>> 1c356adfb582cbb11f1ab7517c0bf90a3be12969

function App() {
  return (
    <Router>
    <div>
      <Nav />
<<<<<<< HEAD

      
      {/* <Home /> */}
      
      <Profile />
=======
      <Profile />
      {/* <Service /> */}
      <Map />
      {/* <Home /> */}

>>>>>>> 1c356adfb582cbb11f1ab7517c0bf90a3be12969
      
    </div>
    </Router>
  );
}

export default App;
