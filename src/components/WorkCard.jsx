import "./Workcard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-detail">
        <p>{props.desc}</p>
        <div className="pro-btn">
          <Link to={props.view} className="btn">
            VIEW
          </Link>
          <Link to={props.source} className="btn">
            SOURCE
          </Link>
        </div>
      </div>
    </div>
  );
}
