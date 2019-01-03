import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/game"
              className={window.location.pathname === "/game" ? "nav-link active" : "nav-link"}
            >
              Clicky Game
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
