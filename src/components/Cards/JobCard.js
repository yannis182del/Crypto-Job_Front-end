import React, { Component } from "react";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";
import SearchResults from "react-filter-search";
import { Link } from "react-router-dom";
import { fetchJobs, updateCurrent } from "../../redux/reducers/job";
import { connect } from "react-redux";

import "../LocationInput/Input.css";
import "./JobCard.css";

class JobCard extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  render() {
    const { jobs, value } = this.props;

    return this.props.loading === true ? (
      <LoadingSpinner />
    ) : (
      <>
        <div className="input-container">
          <span className="fa fa-search" />
          <input
            className="main-input"
            placeholder="Find A Job..."
            type="text"
            value={this.props.value}
            onChange={this.handleInputChange}
          />
        </div>

        <SearchResults
          value={value}
          data={jobs}
          renderResults={results => (
            <div>
              {results.map((job, id) => (
                <div key={id}>
                  <div key={job._id} className="blog-card">
                    <div className="meta" />
                    <div className="description">
                      <Link
                        className="link-apply"
                        to={{
                          pathname: `/job/${job._id}`,
                          state: job
                        }}
                      >
                        <h5 className="position-name">{job.position_name}</h5>
                      </Link>

                      <p className="place">{job.workplace_name}</p>
                      <p className="job-desc">{job.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      </>
    );
  }
}

export default connect(
  state => ({
    jobs: state.job.jobs,
    loading: state.job.loading,
    value: state.job.value
  }),
  { fetchJobs, updateCurrent }
)(JobCard);
