import React from 'react';
import {
  ArticleComp,
  PositionNameArticle,
  Location,
  WorkplaceName,
  LocationName,
  ContractType,
  ArticleTitle,
  Compensation,
  AboutDescription,
  OverView,
  Skills,
  Ul,
} from './styled';

export default function ArticleComponent({
  positionName,
  workPlaceName,
  location,
  contractType,
  description,
  jobOverview,
  skills,
  compensation,
  key,
}) {
  return (
    <ArticleComp>
      <PositionNameArticle>{positionName}</PositionNameArticle>
      <Location>
        <WorkplaceName>{workPlaceName}</WorkplaceName> <LocationName> - {location}</LocationName>
      </Location>
      <ContractType>{contractType}</ContractType>
      <ArticleTitle>About Us</ArticleTitle>
      <AboutDescription>{description}</AboutDescription>
      <ArticleTitle>Job Overview</ArticleTitle>
      <OverView>{jobOverview}</OverView>
      <ArticleTitle>Skills</ArticleTitle>
      <Ul>
        {skills.map(skill => (
          <Skills key={key}>{skill}</Skills>
        ))}
      </Ul>
      <ArticleTitle>Compensation</ArticleTitle>
      <Compensation>{compensation === '' ? 'To Discuss' : compensation}</Compensation>
    </ArticleComp>
  );
}
