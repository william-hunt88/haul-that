
import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import history from '../../history';

export default class Routes extends Component {
    render() {
    
        return (
            <div>
                <div>
                    <Form>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>QTY</Form.Label>
                            <Form.Control type="text" placeholder="0" />
                        </Form.Group>

                        <Form.Group controlId="formBookJob">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" defaultValue="Choose a category" readOnly>
                                <option>Furniture</option>
                                <option>Scrap Metal</option>
                                <option>Yard Waste</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Description</Form.Label><br />
                            <Form.Control as="textarea" placeholder="Type here" />
                        </Form.Group>
                    </Form>
                    {/* Item QTY */}
                    {/* category */}
                    {/* date */}
                    {/* time */}
                    {/* description */}
                    {/* button to render next section */}
                    <form>
                        <Button variant="btn btn-success" onClick={() => history.push('/BookingB')}>Continue</Button>
                    </form>
                </div>
            </div>
        );
    }
};