import React, { useEffect, useState } from 'react';
import ArticleComponent from "./ArticleComponent";
import GradiendButton from "../Buttons/GradientButton"
import { getJobId, query } from "../../helper/helper"


const Articles = () => {
  const [job, setJob] = useState(null);
  useEffect(() => {
    query(getJobId(), setJob);
  }, []);


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
          />
          <GradiendButton link={job.link} />
        </>
      )
      : null
  )
};

export default Articles
