import "./Workcard.css";
import React from "react";

export default function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-detail">
        <p>{props.desc}</p>
        <div className="pro-btn">
          <a href={props.view} className="btn">
            VIEW
          </a>
          <a href={props.source} className="btn">
            SOURCE
          </a>
        </div>
      </div>
    </div>
  );
}
