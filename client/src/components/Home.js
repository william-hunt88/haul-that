import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function Home() {

  return (
    <Router>
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link to="/">
            <h1>Haul That</h1>
          </Link>
        </div>
      </header>
    </Router>
  );
};

export default Home;