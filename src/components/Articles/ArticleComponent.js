import React from "react";
import {ArticleComp,
   PositionNameArticle,
   Location,
   WorkplaceName,
   LocationName,
   ContractType,
   ArticleTitle, 
   Compensation,
   AboutDescription,
   OverView,
   Skills
  } from "./styled"
 
  
export default function ArticleComponent(props) {
  return (
    <>
      <ArticleComp>
        <PositionNameArticle>{props.position_name}</PositionNameArticle>
        <Location>
          <WorkplaceName>{props.workplace_name}</WorkplaceName>{" "}
          <LocationName> - {props.location}</LocationName>
        </Location>
        <ContractType>{props.contract_type}</ContractType>
          <ArticleTitle>About Us</ArticleTitle>
          <AboutDescription>{props.description}</AboutDescription>
          <ArticleTitle>Job Overview</ArticleTitle>
          <OverView>{props.jobOverview}</OverView>
          <ArticleTitle>Skills</ArticleTitle>
          <ul>
            {props.skills.map((skill, key) => (
              <Skills key={key} >{skill}</Skills>
            )
            )}
          </ul>
          <ArticleTitle>Compensation</ArticleTitle>
          <Compensation>{props.compensation === "" ? "To Discuss" : props.compensation}</Compensation>     
      </ArticleComp>
    </>
  );
}
