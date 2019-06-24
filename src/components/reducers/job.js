import { getJobs } from "../lib/apiServices";

const initialState = {
  jobs: []
};

const JOB_LOAD = " JOB_LOAD";

export const loadJobs = jobs => ({ type: JOB_LOAD, payload: jobs });

export const fetchJobs = () => {
  return dispatch => {
    getJobs().then(jobs => dispatch(loadJobs(jobs)));
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_LOAD:
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};
