import React from "react";
import "./Article.css";
import "./ArticleGrid.css";

const Articles = ({ location }) => (
    <div>
  <div className="article-container">
    <div className="flex-header">
      <p>{location.state.location}</p>
      <p>{location.state.contract_type}</p>
    </div>
    <div  className="article-title">
      <img className="article-img" src={location.state.img} alt="logo" />{" "}
    <p className="article-workplace_name">{location.state.workplace_name}</p>
    <h2>{location.state.position_name}</h2>
    </div>
  </div>
    <div className="grid">
    <div className="flex-item ">
    <div className="item1">
    <h4>Compensation</h4>
    <p>{location.state.Compensation}</p>
    </div>
    <div className="item2">
    <h4>Skills</h4>
    {location.state.skills}
    </div>
    </div>
    <div className="item-description">
    <h4>Job Description</h4>
<p>{location.state.description}</p>
    </div>
    </div>
  </div>
);

export default Articles;
