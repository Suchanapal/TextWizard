import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const { mode, toggleMode } = props;

  const navbarStyle = {
    background:
      mode === "dark"
        ? "linear-gradient( 106.37deg, #332842 29.63%, #523132 51.55%, #845482 90.85% )"
        : "linear-gradient( 106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85% )",
    color: "black"
  };

  const imgStyle = {
    filter: mode === "dark" ? "invert(100%)" : "none"
  };

  return (
    <nav className={`sticky-top navbar navbar-expand-lg`} style={navbarStyle}>
      <div className="container-fluid">
        <a href="https://www.flaticon.com/free-icons/wizard" title="wizard icons">
          <img src={require('../wizard.png')} alt="wizard icon" style={imgStyle} />
        </a>

        <NavLink
          className={`navbar-brand ${mode === "dark" ? "dark" : "light"}`}
          to="/"
          activeClassName="active"
        >
          <span className="change">
            Text<span>W</span>izard
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <NavLink
                className={`nav-link ${mode === "dark" ? "dark" : "light"}`}
                exact
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={`nav-link ${mode === "dark" ? "dark" : "light"}`}
                to="/About"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            />
            <label className="form-check-label fon" htmlFor="flexSwitchCheckDefault">
  {props.mode === "dark" ? "light Mode" : "Dark Mode"}
</label>

          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
