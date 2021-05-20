import React, { useState } from "react";
import { PageHeader} from "antd";
import { UserOutlined } from "@ant-design/icons";





function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (

    
    <nav className="navBar">
        
         <PageHeader className="site-page-header" title="HaulThat" 
         extra={[<UserOutlined />]}
/>
         
         
      <button class="button1" onClick={handleToggle}>{navbarOpen ? "..." : "..."}</button>
      
      <ul class="menu1" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      <li class="booking">Booking</li>
      <li class="jobs">Jobs</li>
      <li class="account">Account</li>
      
      </ul>
      
      
     
    </nav>
    
  )
  
}

export default Nav;
