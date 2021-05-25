import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD:client/src/components/Home/index.js
import  Login  from "../../pages/Login";
import  Signup  from "../../pages/Signup";
import Auth from "../../utils/auth";

const Home = () => {
  const logout = (event) => {
  event.preventDefault();
  Auth.logout();
   };
=======
// import Auth from "../utils/auth";


function Home() {
  // const Home = () => {
  //   const logout = (event) => {
  //     event.preventDefault();
  //     Auth.logout();
  //   }
  // };

  // mutation to get all jobs lat and long from mapquest and send to Map Component as props
>>>>>>> f3dda15f6c06244f7c914786bcb6001eef576b7b:client/src/components/Home.js

  return (
    <Router>
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link to="/">
            <h1>Haul That</h1>
          </Link>
          {/* <nav className="text-center"> */}
            {/* {Auth.loggedIn() ? (
              <>
                <Link to="/profile">Me</Link>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </> 
             ) : (
              <>
                <Link to="/login" component={ Login }>Login</Link>
                <Link to="/signup" component= { Signup }>Signup</Link>
              </>
            )} */}

            
          {/* </nav> */}
        </div>
      </header>
    </Router>
  );
};

export default Home;
