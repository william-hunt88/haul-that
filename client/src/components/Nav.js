import React, { useState } from "react";
<<<<<<< HEAD:client/src/components/Nav/index.js
import { PageHeader } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
=======
import { PageHeader} from "antd";
import { UserOutlined } from "@ant-design/icons";
import Booking from './Booking/Booking';
import history from '../history';
>>>>>>> 1c356adfb582cbb11f1ab7517c0bf90a3be12969:client/src/components/Nav.js



function Nav() {

  return (
<<<<<<< HEAD:client/src/components/Nav/index.js
<div class="navbar">
  
=======

    
    <nav className="navBar">
        
         <PageHeader className="site-page-header" title="HaulThat" 
         extra={[<UserOutlined />]}
/>
         
         
      <button class="button1" onClick={handleToggle}>{navbarOpen ? "..." : "..."}</button>
      
      <ul class="menu1" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      <li class="booking" onClick={() => history.push('/BookingA')}>Booking</li>
      <li class="jobs">Jobs</li>
      <li class="account">Account</li>
      
      </ul>
      
      
     
    </nav>
    
  )
>>>>>>> 1c356adfb582cbb11f1ab7517c0bf90a3be12969:client/src/components/Nav.js
  
  <div class="dropdown">
    <button class="dropbtn"><MenuOutlined />
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Booking</a>
      <a href="#">Jobs</a>
      <a href="#">My Account</a>
    </div>
  </div>
 <h1 class="title">HaulThat</h1>
</div>
  )}


export default Nav;
