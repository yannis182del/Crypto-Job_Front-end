import React from "react";
import ArticlesHeader from "./ArticleHeader";
import ArticleComponent from "./ArticleComponent";
import "./Article.css";
import "./ArticleGrid.css";

const Articles = ({ location }) => (
  <>
    <ArticlesHeader
      location={location.state.location}
      contract_type={location.state.contract_type}
      img={location.state.img}
      workplace_name={location.state.workplace_name}
      position_name={location.state.position_name}
    />
    <ArticleComponent
      Compensation={location.state.Compensation}
      skills={location.state.skills}
      starting_date={location.state.starting_date}
      contract_type={location.state.contract_type}
      type={location.state.type}
      description={location.state.description}
    />
  </>
);

export default Articles;
