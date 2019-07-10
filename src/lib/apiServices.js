import config from "../config"

const url = config.API;

export const getJobs = () => {
  return fetch(url).then(res => res.json());
};