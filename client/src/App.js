import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Landing from './components/Landing';
import BookingA from './components/Booking/BookingA';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <BookingA />
      
      {/* <Home /> */}
      
      {/* <Profile /> */}
      
    </div>
    </Router>
  );
}

export default App;
