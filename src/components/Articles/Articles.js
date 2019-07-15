import React, { useEffect, useState } from 'react';
import ArticleComponent from "./ArticleComponent";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";



const query = async (id, onFetchData) => {
  const res = await fetch(`https://cryptoapiforpersonal.herokuapp.com/job/${id}`);
  const data = await res.json();
  onFetchData(data);
}

const getJobId = () => {
  const pathname = window.location.pathname.split('/');
  return pathname[pathname.length - 1];
}

const Articles = () => {
  const [job, setJob] = useState(null);
  useEffect(() => {
    query(getJobId(), setJob);
  }, []);

  return <>{
    job
      ? <ArticleComponent
        position_name={job.position_name}
        workplace_name={job.workplace_name}
        location={job.location}
        contract_type={job.contract_type}
        description={job.description}
      />
      : <LoadingSpinner />
  }</>
};

export default Articles
