import React, { useState } from "react";
import { PageHeader } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";



function Nav() {

  return (
<div class="navbar">
  
  
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
