import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';

export default class Booking extends Component {
    render() {
    
        return (
            <div>
                <form>
                    <Button variant="btn btn-success" onClick={() => history.push('/BookingA')}>Book A Job</Button>
                </form>
            </div>
        );
    }
};