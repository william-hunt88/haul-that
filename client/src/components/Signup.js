import React, { Component } from "react";
import { Col, Row , Container } from "react-bootstrap";

export default class SignUp extends Component {
    render() {
        return (
            <Container>
            <Row>
            <Col xs={3} md={4} />
            <Col xs={5} md={4}>
    
            <form className="signupform">
                <h3>SignUp</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
              
            </form>
            </Col>
<Col xs={4} md={4} />
</Row>
</Container>
        );
    }
}