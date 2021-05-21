import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Landing from './components/Landing';


function App() {
  return (
    <Router>
    <div>
      <Nav />

      
      {/* <Home /> */}
      
      {/* <Profile /> */}
      
    </div>
    </Router>
  );
}

export default App;
