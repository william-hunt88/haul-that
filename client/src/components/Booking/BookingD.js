
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';

export default class Routes extends Component {
    render() {
    
        return (
            <div>
                <div>
                    {/* Item QTY */}
                    {/* category */}
                    {/* date */}
                    {/* time */}
                    {/* description */}
                    {/* button to render next section */}
                    <form>
                        <Button variant="btn btn-success" onClick={() => history.push('/')}>Complete</Button>
                    </form>
                </div>
            </div>
        );
    }
};