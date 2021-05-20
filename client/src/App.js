import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <Router>
    <div>
      <Home>
        
      </Home>
      <Profile />
      <Nav />
    </div>
    </Router>
  );
}

export default App;
