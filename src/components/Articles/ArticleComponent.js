import React from "react";
import "./Article.css";
import "./ArticleGrid.css";

export default function ArticleComponent(props) {
  return (
    <div className="grid article-component">
      <div className="flex-item">
        <div className="item">
          <h4 className="title-article">Compensation</h4>
          <p>{props.Compensation}</p>
        </div>
        <div className="item">
          <h4 className="title-article">Skills</h4>
          {props.skills}
        </div>
        <div className="item">
          <h4 className="title-article">Starting Date</h4>
          {props.starting_date}
        </div>
        <div className="item">
          <h4 className="title-article">Contract Type</h4>
          {props.contract_type}
        </div>
        <div className="item">
          <h4>Field</h4>
          <span className={props.type === "Tech" ? "red" : "blue"}>
            {props.type}
          </span>
        </div>
      </div>
      <div className="item-description">
        <h4 className="title-article">Job Description</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
