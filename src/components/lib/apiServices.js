const url = "https://cryptoapiforpersonal.herokuapp.com/job";

export const getJobs = () => {
  return fetch(url).then(res => res.json());
};
