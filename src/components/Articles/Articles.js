import React, { useEffect, useState } from 'react';
import ArticleComponent from './ArticleComponent';
import GradiendButton from '../Buttons/GradientButton';
import { getJobId, query } from '../../helper/helper';
import LoadingSpinner from '../Loading-Spinner/LoadingSpinner';

const Articles = () => {
  const [job, setJob] = useState(null);
  useEffect(() => {
    query(getJobId(), setJob);
  }, []);

  const replaceBreaks = data => {
    const stringAsArr = data
      .split('lb182')
      .map(str => [str, <br />])
      .flat();
    return stringAsArr;
  };
  return job ? (
    <>
      <ArticleComponent
        key={job._id}
        positionName={job.position_name}
        workPlaceName={job.workplace_name}
        location={job.location}
        contractType={job.contract_type}
        description={replaceBreaks(job.description)}
        jobOverview={job.jobOverview}
        skills={job.skills}
        compensation={job.Compensation}
      />
      <GradiendButton link={job.link} />
    </>
  ) : (
    <LoadingSpinner />
  );
};

export default Articles;
