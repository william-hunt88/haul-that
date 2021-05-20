import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//import  Login  from "../../pages/Login";
//import  Signup  from "../..pages/Signup";
//import Auth from "../../utils/auth";

const Home = () => {
//   //const logout = (event) => {
//     //event.preventDefault();
//     //Auth.logout();
//   };

  return (
    <Router>
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link to="/">
            <h1>Haul That</h1>
          </Link>

          <nav className="text-center">
            {/* {Auth.loggedIn() ? (
              <>
                <Link to="/profile">Me</Link>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </> */}
            {/* ) : (
              <>
                <Link to="/login" component={ Login }>Login</Link>
                <Link to="/signup" component= { Signup }>Signup</Link>
              </>
            )} */}
          </nav>
        </div>
      </header>
    </Router>
  );
};

export default Home;
