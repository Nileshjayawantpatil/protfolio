import React from "react";
import logo from "../../accepts/logo.png";
import contact from "../../accepts/contact.png";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="dekstopmenu">
        <Link className="dekstopmenuitems">Home</Link>
        <Link className="dekstopmenuitems">About</Link>

        <Link className="dekstopmenuitems">Client</Link>

        <Link className="dekstopmenuitems">protfolio</Link>
      </div>
      <button className="dekstopmenulistitems">
        <img src={contact} alt="Contact" className="btn" />
        contact me
      </button>
    </nav>
  );
};

export default Navbar;
