import React from "react";
import "./Article.css";
import GradiendButton from "../Buttons/GradientButton";

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
          <h3 className="about">About Us</h3>
          <p className="about-description">{props.description}</p>
          <h3 className="about">Job Overview</h3>
        </div>
      </div>
      <GradiendButton link={props.link} />
    </>
  );
}
