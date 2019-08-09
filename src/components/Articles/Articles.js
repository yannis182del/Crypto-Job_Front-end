import React, { useEffect, useState } from 'react';
import ArticleComponent from "./ArticleComponent";
import GradiendButton from "../Buttons/GradientButton"
import config from "../../config/config"
import { getJobId } from "../../helper/helper"

const url = config.MOCk_API;

const query = async (id, onFetchData) => {
  const res = await fetch(`${url}${id}`);
  console.log(res)
  const data = await res.json();
  onFetchData(data);
}

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
