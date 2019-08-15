import React from "react";
import "./Article.css";

export default function ArticleComponent(props) {
  return (
    <>
      <div className="article-component">
        <h4 className="position-name-article">{props.position_name}</h4>
        <p className="location">
          <span className="workplace-name">{props.workplace_name}</span>{" "}
          <span className="location-name"> - {props.location}</span>
        </p>
        <p className="contract-type">{props.contract_type}</p>
        <div className="main-content">
          <h3 className="article-title">About Us</h3>
          <p className="about-description">{props.description}</p>
          <h3 className="article-title">Job Overview</h3>
          <p className="about-description overview">{props.jobOverview}</p>
          <h3 className="article-title">Skills</h3>
          <ul>
            {props.skills.map((skill, key) => (
              <li key={key} className="skills" >{skill}</li>
            )
            )}
          </ul>
          <h3  className="article-title">Compensation</h3>
          <p className="compensation">{props.compensation === "" ? "To Discuss" : props.compensation}</p>
        </div>
      </div>
    </>
  );
}
