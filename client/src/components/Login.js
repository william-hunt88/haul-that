import React, { Component } from "react";
import { Col, Row , Container } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
        <Container>
        <Row>
        <Col xs={3} md={4} />
        <Col xs={5} md={4}>

      <form className="loginform">
        <h3 className='logintitle'>Login</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
    
      </form>

      </Col>
<Col xs={4} md={4} />
</Row>
</Container>
    );
  }
}
