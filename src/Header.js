import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import logo from "./img/logo.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo"></img>
      </Link>

      <ul id="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Link to="/donate" id="donate-link">
        Donate
      </Link>
    </header>
  );
}

export default Header;
