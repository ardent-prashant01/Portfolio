import React from "react";
import "./Hero.css";
import maskImg from "../assets/photo01.png";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={maskImg} alt="mask image" />
      </div>
      <div className="content">
        <p>Hi, I'm Prashant.</p>
        <h1>Software Developer.</h1>
        <div className="button">
          <Link to="/projects" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
