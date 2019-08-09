import config from "../config/config"

const url = config.MOCk_API;

export const getJobs = () => {
  return fetch(url).then(res => res.json());
}; 

