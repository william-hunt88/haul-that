
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
<<<<<<< HEAD
// import Service from './components/Service';

function App() {
  return (
    <div>
      <Nav />
      <Profile />
      {/* <Service /> */}
=======

import Map from "./components/Map"
import Booking from './components/Booking/Booking';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
              <NavBar/>
          <Switch>   
            <Route path='/' component={Home}/>   
             {/* <Route path='/profile' component={Profile}/>   */}
             <Route path='/booking' component={Booking}/>               
             {/* <Route path='/rhino' component={Rhino}/> 
             <Route path='/seaTurtle' component={SeaTurtle}/>   */}
                      
          </Switch>

>>>>>>> f3dda15f6c06244f7c914786bcb6001eef576b7b
    </div>
);
}

export default App;
