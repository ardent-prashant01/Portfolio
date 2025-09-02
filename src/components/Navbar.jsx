import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      <a href="/">
        <h1>Portfolio.</h1>
      </a>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }}></FaTimes>
        ) : (
          <FaBars size={20} style={{ color: "white" }}></FaBars>
        )}
      </div>
    </div>
  );
};

export default Navbar;
