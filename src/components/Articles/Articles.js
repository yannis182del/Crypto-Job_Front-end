import React from "react";
import ArticlesHeader from "./ArticleHeader";
import "./Article.css";
import "./ArticleGrid.css";

const Articles = ({ location }) => (
  <div>
    <div className="grid article-component">
      <div className="flex-item">
        <div className="item">
          <h4 className="title-article">Compensation</h4>
          <p>{location.state.Compensation}</p>
        </div>
        <div className="item">
          <h4 className="title-article">Skills</h4>
          {location.state.skills}
        </div>
        <div className="item">
          <h4 className="title-article">Starting Date</h4>
          {location.state.starting_date}
        </div>
        <div className="item">
          <h4 className="title-article">Contract Type</h4>
          {location.state.contract_type}
        </div>
        <div className="item">
          <h4>Field</h4>
          <span className={location.state.type === "Tech" ? "red" : "blue"}>
            {location.state.type}
          </span>
          {console.log(location.state.type)}
        </div>
      </div>
      <div className="item-description">
        <h4 className="title-article">Job Description</h4>
        <p>{location.state.description}</p>
      </div>
    </div>
  </div>
);

export default Articles;
