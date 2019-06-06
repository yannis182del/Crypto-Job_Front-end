import React from "react";
import "./Article.css";


export default function ArticleHeader(props) {
  return (
    <div className="article-container">
      <div className="flex-header">
        <p>{props.location}</p>
        <p>{props.contract_type}</p>
      </div>
      <div className="article-title">
        <img className="article-img" src={props.img} alt="logo" />{" "}
        <p className="article-workplace_name">{props.workplace_name}</p>
        <h2>{props.position_name}</h2>
      </div>
    </div>
  );
}
