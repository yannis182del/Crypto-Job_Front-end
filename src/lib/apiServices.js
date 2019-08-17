import config from '../config/config';

const url = config.API;

const getJobs = async () => {
  const res = await fetch(url);
  return res.json();
};

export default getJobs;
