import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';




function NavBar() {
 return (

        <Navbar collapseOnSelect fixed='top' expand='sm' bg='danger' variant='dark'>
            <h1 class="title">HaulThat</h1>
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
    </Container>
    
</Navbar>

  );
    
  }

export default NavBar;
