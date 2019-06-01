import React, { Component } from "react";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";
import SearchResults from "react-filter-search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../LocationInput/Input.css";
import "./JobCard.css";

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      value: ""
    };
  }

  componentWillMount() {
    fetch("https://cryptoapiforpersonal.herokuapp.com/job")
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

  render() {
    if (this.state.isLoading === true) return <LoadingSpinner />;
    else {
      const { data, value } = this.state;
      return (
        <>
          <div className="input-container">
            <input
              onFocus="this.placeholder = ''"
              className="main-input"
              placeholder="Location.."
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <SearchResults
            value={value}
            data={data}
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

export default JobCard;
