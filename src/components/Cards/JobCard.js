import React, { Component } from "react";

import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";
import FaIcon from "../../assets/FaIcon";
import MainInput from "../Input/Input";
import SearchResults from "react-filter-search";
import ToggleJob from "../Toggle/ToggleJob";

import { Link } from "react-router-dom";

import { fetchJobs, updateCurrent } from "../../redux/reducers/job";
import { connect } from "react-redux";

import "./JobCard.css";

class JobCard extends Component {
  state = {
    toggle: false,
  };

  componentWillMount() {
    this.props.fetchJobs();
  }

  render() {
    const { jobs, value, loading, updateCurrent } = this.props;
    const { toggle, toggleJob } = this.state

    const handleInputChange = evt => {
      const val = evt.target.value;
      updateCurrent(val);
    };

    const handleClick = () => {
      this.setState({
        toggleJob: !this.state.toggleJob
      });
    };

    const handleToggle = () => {
      this.setState({
        toggle: !this.state.toggle
      });
    };

    return loading === true ?
      <LoadingSpinner />
      :
      <>
        {toggle === true ?
          <div className="toggle-jobs">
            <MainInput
              onClick={handleToggle}
              class="main-input"
              placeholder="Find A Job..."
              type="text"
              value={value}
              onChange={handleInputChange}
            />
          </div>
          :
          <>
            <ToggleJob
              handleClick={handleClick}
              isToggleOn={toggleJob}
              className="toggle-button"
            />
            <FaIcon
              className="fa fa-search side-glass"
              onClick={handleToggle}
            />
          </>
        }

        <SearchResults
          value={value}
          data={jobs}
          renderResults={results => (
            <>
              {results.map((job, id) => (
                <div
                  className={
                    toggleJob && job.location !== "remote"
                      ? "hidden"
                      : null
                  }
                  key={id}
                >
                  <div key={job._id} className="blog-card">
                    <div className="description">
                      <Link
                        className="link-apply"
                        to={{
                          pathname: `/job/${job._id}`,
                        }}
                      >
                        <h5 className="position-name">{job.position_name}</h5>
                        <p className="place">{job.workplace_name}</p>
                        <p className="location-job">{job.location}</p>
                      </Link>
                    </div>
                  </div>
                </div>

              ))}
            </>
          )}
        />
      </>
      ;
  }
}

export default connect(
  state => ({
    jobs: state.job.jobs,
    loading: state.job.loading,
    value: state.job.value,
  }),
  { fetchJobs, updateCurrent }
)(JobCard);
