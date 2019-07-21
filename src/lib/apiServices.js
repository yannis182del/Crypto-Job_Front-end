import config from "../config/config"

const url = config.API;

export const getJobs = () => {
  return fetch(url).then(res => res.json());
}; 