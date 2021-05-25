import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Jobs from "./components/Jobs";
import Home from "./components/Home";
import Booking from './components/Booking/Booking';
import BookingA from './components/Booking/BookingA';
import BookingB from './components/Booking/BookingB';
import BookingC from './components/Booking/BookingC';
import BookingD from './components/Booking/BookingD';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/jobs" exact component={Jobs} />
                <Route path="/home" exact component={Home} />
                    <Route path="/Booking" exact component={Booking} />
                    <Route path="/BookingA" component={BookingA} />
                    <Route path="/BookingB" component={BookingB} />
                    <Route path="/BookingC" component={BookingC} />
                    <Route path="/BookingD" component={BookingD} />
                </Switch>
            </Router>
        )
    }
};