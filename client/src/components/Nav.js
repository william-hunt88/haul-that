import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap'
import { PageHeader } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Booking from "./Booking/Booking";
import history from "../history";
import { Link } from "react-router-dom";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    // <nav className="navBar">
    //   <PageHeader
    //     className="site-page-header"
    //     title="HaulThat"
    //     extra={[<UserOutlined />]}
    //   />

    //   <button className="button1" onClick={handleToggle}>
    //     {navbarOpen ? "..." : "..."}
    //   </button>

    //   <div className="menu1" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
    //     <Link to='/BookingA'>Booking</Link>
    //     {/* <li class="booking" onClick={() => history.push("/BookingA")}>
    //       Booking
    //     </li> */}
    //     {/* <li class="jobs">Jobs</li>
    //     <li class="account">Account</li> */}
    //   </div>
    // </nav>
  );
}

export default Nav;
