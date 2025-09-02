import React from "react";
import photo1 from "../assets/photo01.png";
import proj01 from "../assets/proj01.jpg";
import "./AboutComponent.css";
import { Link } from "react-router-dom";
export default function AboutComponent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a MERN stack developer. I create responsive, secure websites for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="top">
            <img src={photo1} alt="image" className="img" />
          </div>
          <div className="btm">
            <img src={proj01} alt="image" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
