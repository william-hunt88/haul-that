import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import BookingA from "./components/Booking/BookingA";
import BookingB from './components/Booking/BookingB';
import BookingC from './components/Booking/BookingC';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/BookingA" component={BookingA} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;