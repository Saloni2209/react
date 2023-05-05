import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* navbar start */}
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#2E375F" }}
      >
        <div className="container-fluid">
          <img src="image/logo.jpg" alt />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Services">
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Available_cars">
                  AVAILABLE CARS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Contact">
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/login">
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </div>
  );
}

export default Header;
