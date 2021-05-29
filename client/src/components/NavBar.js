import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import Auth from "../utils/auth";

const NavBar = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
<<<<<<< HEAD
  // console.log(Auth.loggedIn());
=======
  
>>>>>>> da85385012b638e796b247c4a0c0f5d6e2584773
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="danger" variant="dark">
      <h1 className="title">HaulThat</h1>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {Auth.loggedIn() ? (
              <React.Fragment>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/bookingA">Booking</Nav.Link>
<<<<<<< HEAD
                <Nav.Link href="/jobs">
                  Jobs
                  {/* <Badge class="badge1" variant="light">
                    3
                  </Badge> */}
                </Nav.Link>
                <Nav.Link className="login2" href="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="signup2" href="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link className="login1" href="/profile" to="/profile">
                  My Profile
                </Nav.Link>
                <Nav.Link className="signup1" onClick={logout}>
=======
                <Nav.Link href="/jobs">Jobs</Nav.Link>
                <Nav.Link onClick={logout}>
>>>>>>> da85385012b638e796b247c4a0c0f5d6e2584773
                  Logout
                </Nav.Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Nav.Link href="/login">
                  Login
                </Nav.Link>
                <Nav.Link href="/signup">
                  Sign Up
                </Nav.Link>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
        <div></div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
