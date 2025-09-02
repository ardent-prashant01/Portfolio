import React from "react";
import "./Hero.css";
import maskImg from "../assets/photo01.png";
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
          <a href="/projects" className="btn">
            Project
          </a>
          <a href="/contact" className="btn btn-light">
            Contact
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}
