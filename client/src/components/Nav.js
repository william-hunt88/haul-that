import React, { useState } from "react";
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <DropdownButton variant="danger" id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/BookingA">Booking</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Jobs</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
    </DropdownButton>
  );
}

export default Nav;
