import "./Workcard.css";
import React from "react";
import WorkCard from "./WorkCard";
import projectCardData from "./Workdata";

export default function Work() {
  return (
    <div className="work-card">
      <h1 className="pro-heading">Projects</h1>
      <div className="project-container">
        {projectCardData.map((val, idx) => {
          return (
            <WorkCard
              key={idx}
              imgsrc={val.imgsrc}
              title={val.title}
              desc={val.desc}
              view={val.view}
              source={val.source}
            ></WorkCard>
          );
        })}
      </div>
    </div>
  );
}
