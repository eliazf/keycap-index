import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/contact">Contact</Link>
    </header>
  );
}

export default Header;
