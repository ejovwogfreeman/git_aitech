import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav style={{ marginBottom: "30px" }}>
      <Link to="/form">form</Link>
      <Link to="/list">list</Link>
      <Link to="/conditionals">conditionals</Link>
      <Link to="/event">event</Link>
      <Link to="/comp">comp</Link>
      <Link to="/skay">skay</Link>
    </nav>
  );
};

export default Navbar;
