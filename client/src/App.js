import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Jobs from "./components/Jobs";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route path="/jobs" component={Jobs} />
        
      </Switch>
    </div>
  );
}

export default App;
