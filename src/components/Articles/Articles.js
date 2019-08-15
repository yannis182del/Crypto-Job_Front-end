import React, { useEffect, useState } from 'react';
import ArticleComponent from "./ArticleComponent";
import GradiendButton from "../Buttons/GradientButton"
import { getJobId, query } from "../../helper/helper"
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner"


const Articles = () => {
  const [job, setJob] = useState(null);
  useEffect(() => {
    query(getJobId(), setJob);
  }, []);

console.log(job)
  return (
  
    job
    
      ? (
        <>
          <ArticleComponent
            position_name={job.position_name}
            workplace_name={job.workplace_name}
            location={job.location}
            contract_type={job.contract_type}
            description={job.description}
            jobOverview={job.jobOverview}
            skills={job.skills}
            compensation={job.Compensation}
          />
          <GradiendButton link={job.link} />
        </>
      )
      : <LoadingSpinner />
  )
};

export default Articles
