import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/form">form</Link>
      <Link to="/list">list</Link>
      <Link to="/conditionals">conditionals</Link>
      <Link to="/event">event</Link>
      <Link to="/comp">comp</Link>
      <Link to="/skay">skay</Link>
    </div>
  );
};

export default Navbar;
