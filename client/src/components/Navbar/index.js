import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand supBotNav" to="/">
            SupBot
      </Link>
      <div className='container'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item navLeft2">
            <Link
              to="/upcomingdrop"
              className={window.location.pathname === "/upcomingdrop" ? "nav-link active" : "nav-link"}
            >
              Upcoming Drop
            </Link>
          </li>
          <li className="nav-item navRight1">
            <Link
              to="/bot"
              className={window.location.pathname === "/bot" ? "nav-link active" : "nav-link"}
            >
              Bot
            </Link>
          </li>
          <li className="nav-item navRight2">
            <Link
              to="/contactus"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
