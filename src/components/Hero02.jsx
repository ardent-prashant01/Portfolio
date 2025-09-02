import React from "react";
import "./Hero02.css";

export default function ({ heading, text }) {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
