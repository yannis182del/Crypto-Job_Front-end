import { getJobs } from "../../lib/apiServices";


const initialState = {
  jobs: [],
  value: "",
  loading: true,
};

const JOB_LOAD = " JOB_LOAD";
const CURRENT_UPDATE = "CURRENT_UPDATE";
const JOB_LOADING = "JOB_LOADING ";

export const loadJobs = jobs => ({ type: JOB_LOAD, payload: jobs });
export const updateCurrent = value => ({
  type: CURRENT_UPDATE,
  payload: value
});
export const loading = loading => ({ type: JOB_LOADING, payload: loading });

export const fetchJobs = () => {
  return dispatch => {
    getJobs()
      .then(jobs => dispatch(loadJobs(jobs)))
      .then(load => dispatch(loading(load)));
  };
};




export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_LOADING:
      return { ...state, loading: action.payload };
    case JOB_LOAD:
      return { ...state, jobs: action.payload };
    case CURRENT_UPDATE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
