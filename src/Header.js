import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <div id="header">
      <ul id="classic-links">
        <li className="header-link">
          <Link to="/">Home</Link>
        </li>
        <li className="header-link">
          <Link to="/search">Search</Link>
        </li>
        <li className="header-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div id="donate-link" className="header-link">
        <Link to="/donate" id="donate-link">
          Donate
        </Link>
      </div>
    </div>
  );
}

export default Header;
