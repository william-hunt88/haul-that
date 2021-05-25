import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Map from "./components/Map"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
              <NavBar/>
          <Switch>   
            <Route path='/' component={Home}/>   
             {/* <Route path='/profile' component={Profile}/>   */}
             {/* <Route path='/rhino' component={Rhino}/> 
             <Route path='/seaTurtle' component={SeaTurtle}/>   */}      
          </Switch>
      </Router>
    </div>
);
}

export default App;
