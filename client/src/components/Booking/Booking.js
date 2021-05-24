import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';

export default class Booking extends Component {
    render() {
    
        return (
            <div>
                <Button variant="btn btn-success" onClick={() => history.push('/BookingA')}>Book A Job</Button>
            </div>
        );
    }
};