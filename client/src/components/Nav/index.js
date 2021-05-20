import React, { useState } from "react";
import { PageHeader } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="navBar">
      <PageHeader
        className="site-page-header"
        title="HaulThat"
        extra={[<UserOutlined class="profile" key="3"></UserOutlined>]}
      />

      <button className="buttonsmall" onClick={handleToggle}>
        {navbarOpen ? (
          <MenuOutlined
            style={{ color: "#ffffff", width: "40px", height: "40px" }}
          />
        ) : (
          <MenuOutlined
            style={{ color: "#ffffff", width: "40px", height: "40px" }}
          />
        )}</button>

      <ul class="menu1" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li class="booking">Booking</li>
        <li class="jobs">Jobs</li>
        <li class="account">Account</li>
        
      </ul>
    </nav>
  );
}

export default Nav;
