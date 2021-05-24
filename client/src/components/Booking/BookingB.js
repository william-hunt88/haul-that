
import React, { Component } from "react";
import { Button, Form, Col } from 'react-bootstrap';
import history from '../../history';

export default class Routes extends Component {
    render() {
    
        return (
            <div>
                
                <form>
                    <Button variant="btn btn-success" onClick={() => history.push('/')}>Complete</Button>
                </form>
            </div>
        );
    }
};