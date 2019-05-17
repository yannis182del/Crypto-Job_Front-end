import React, { Component } from "react";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";
import SearchResults from "react-filter-search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextInput from "../LocationInput/TextInput";
import Menu from "../menu/Menu";

import "../LocationInput/Input.css";

import "./JobCard.scss";

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
    const { match } = this.props;

    if (this.state.isLoading === true) return <LoadingSpinner />;
    else {
      const { data, value } = this.state;
      return (
        <>
          <TextInput class="text_input-top" />
          <div className="input-container">
            <input
              onFocus="this.placeholder = ''"
              className="main-input"
              placeholder="location..."
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
                      <div className="meta">
                        <div className="photo">
                          <img src={job.img} alt="logo" />{" "}
                        </div>
                      </div>
                      <div className="description">
                        <h5>{job.position_name}</h5>
                        <p classname="job-place">{job.workplace_name}</p>
                        <p> {job.description}</p>
                        <p className="read-more">
                          <p>{job.location}</p>
                          <p>
                            <span className="apply-job">
                              {" "}
                              <Link
                                className="link-apply"
                                to={{
                                  pathname: `/job/${job._id}`,
                                  state: job
                                }}
                              >
                                View more
                              </Link>{" "}
                            </span>
                          </p>
                        </p>
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
