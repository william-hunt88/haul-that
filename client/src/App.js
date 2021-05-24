import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Landing from './components/Landing';
import BookingA from './components/Booking/BookingA';
import BookingB from './components/Booking/BookingB';
import BookingC from './components/Booking/BookingC';
import BookingD from './components/Booking/BookingD';

function App() {
  return (
    <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/BookingA" component={BookingA} />
        <Route path="/BookingB" component={BookingB} />
        <Route path="/BookingC" component={BookingC} />
        <Route path="/BookingD" component={BookingD} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
