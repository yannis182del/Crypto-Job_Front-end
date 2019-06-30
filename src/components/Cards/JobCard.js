import React, { Component } from "react";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";
import SearchResults from "react-filter-search";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { fetchJobs, updateCurrent } from "../reducers/job";
import { connect } from "react-redux";
=======
import { BrowserRouter as Route, Link } from "react-router-dom";
>>>>>>> 979be57aed057fdcb68bf1d6ec06c03396842372

import "../LocationInput/Input.css";
import "./JobCard.css";

<<<<<<< HEAD
import "../LocationInput/Input.css";
import "./JobCard.css";
=======
const url = 'https://cryptoapiforpersonal.herokuapp.com/job'
>>>>>>> 979be57aed057fdcb68bf1d6ec06c03396842372

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      value: ""
    };
  }

  componentDidMount() {
    fetch(url)
      .then(data => data.json())
      .then(result =>
        this.setState({
          data: result,
          isLoading: false
        })
      );
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  render() {
<<<<<<< HEAD
    const { jobs, value } = this.props;
    if (this.props.loading === true) return <LoadingSpinner />;
=======
    if (this.state.isLoading === true) return <LoadingSpinner />;
>>>>>>> 979be57aed057fdcb68bf1d6ec06c03396842372
    else {
      const { data, value } = this.state;
      return (
        <>
          <div className="input-container">
            <span className="fa fa-search" />
            <input
              className="main-input"
              placeholder="Find A Job..."
              type="text"
<<<<<<< HEAD
              value={this.props.value}
              onChange={this.handleInputChange}
=======
              value={this.state.value}
              onChange={this.handleChange}
>>>>>>> 979be57aed057fdcb68bf1d6ec06c03396842372
            />
          </div>

          <SearchResults
            value={value}
<<<<<<< HEAD
            data={jobs}
=======
            data={data}
>>>>>>> 979be57aed057fdcb68bf1d6ec06c03396842372
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
}

<<<<<<< HEAD
export default connect(
  state => ({
    jobs: state.job.jobs,
    loading: state.job.loading,
    value: state.job.value
  }),
  { fetchJobs, updateCurrent }
)(JobCard);
=======
export default JobCard;
>>>>>>> 979be57aed057fdcb68bf1d6ec06c03396842372
