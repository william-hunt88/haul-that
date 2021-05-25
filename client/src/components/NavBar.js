import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
 return (

        <Navbar collapseOnSelect fixed='top' expand='sm' bg='danger' variant='dark'>
            <h1 className="title">HaulThat</h1>
    <Container>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/bookingA'>Booking</Nav.Link>
                <Nav.Link href='/jobs'>Jobs</Nav.Link>
                <Nav.Link href='/account'>Account</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav.Link  className="login1" href="/login">Login</Nav.Link>
        <Nav.Link  className="signup1" href="/signup">Sign Up</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
