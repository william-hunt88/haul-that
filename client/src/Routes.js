import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import BookingA from './components/Booking/BookingA';
import BookingB from './components/Booking/BookingB';
import BookingC from './components/Booking/BookingC';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/BookingA" component={BookingA} />
                    <Route path="/BookingB" component={BookingB} />
                    <Route path="/BookingC" component={BookingC} />
                </Switch>
            </Router>
        )
    }
};