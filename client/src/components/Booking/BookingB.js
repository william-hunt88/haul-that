import React from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';

const BookingB = () => {

    return (
        <div>
            <form>
                <Button variant="btn btn-success" onClick={() => history.push('/')}>Complete</Button>
            </form>
        </div>
    )
};

export default BookingB;