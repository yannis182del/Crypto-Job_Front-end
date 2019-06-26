import React, { Component } from "react";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";
import SearchResults from "react-filter-search";
import { Link } from "react-router-dom";
import { fetchJobs } from "../reducers/job";
import { connect } from "react-redux";

import "../LocationInput/Input.css";
import "./JobCard.css";

class JobCard extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  render() {
    if (this.props.loading === true) return <LoadingSpinner />;
    else {
      return (
        <>
          <div className="input-container">
            <span className="fa fa-search" />
            <input
              className="main-input"
              placeholder="Find A Job..."
              type="text"
              value={this.props.value}
              onChange={this.handleChange}
            />
          </div>

          {/* <SearchResults 
       value={this.props.value}
           data={this.props.jobs}
           renderResults={results => (  */}
          <div>
            {this.props.jobs.map((job, id) => (
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
                      <p className="place">{job.workplace_name}</p>
                      <p className="job-desc">{job.location}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
}

export default connect(
  state => ({ jobs: state.job.jobs, loading: state.job.loading }),
  { fetchJobs }
)(JobCard);
