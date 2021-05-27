import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import BookingA from "./components/Booking/BookingA";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/BookingA" component={BookingA} />
            <Route exact path="/jobs" component={Jobs} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
};

export default App;