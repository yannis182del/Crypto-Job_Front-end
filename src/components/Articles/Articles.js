import React from "react";
import ArticleComponent from "./ArticleComponent";

const Articles = ({ location }) => (
  <ArticleComponent
    position_name={location.state.position_name}
    workplace_name={location.state.workplace_name}
    location={location.state.location}
    contract_type={location.state.contract_type}
    description={location.state.description}
    link={location.state.link}
  />
);

export default Articles;
