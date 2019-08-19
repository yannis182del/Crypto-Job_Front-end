/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingSpinner from '../Loading-Spinner/LoadingSpinner';
import FaIcon from '../../assets/FaIcon';
import MainInput from '../Input/Input';
import ToggleJob from '../Toggle/ToggleJob';
import Footer from '../footer/Footer';

import { regexChange } from '../../helper/helper';
import { fetchJobs, updateCurrent } from '../../redux/reducers/job';

import { CardContainer, BlogCard } from './styled';
import './JobCard.css';

class JobCard extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  render() {
    const { jobs, value, loading, updateCurrent } = this.props;
    const { toggle, toggleJob } = this.state;

    const handleInputChange = evt => {
      const val = evt.target.value;
      updateCurrent(val);
    };

    const handleClick = () => {
      this.setState({
        toggleJob: !toggleJob,
      });
    };

    const handleToggle = () => {
      this.setState({
        toggle: !toggle,
      });
    };

    return loading === true ? (
      <LoadingSpinner />
    ) : (
      <>
        {toggle === true ? (
          <div className="toggle-jobs">
            <MainInput
              onClick={handleToggle}
              className="main-input"
              placeholder="Find A Job..."
              type="text"
              value={value}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <>
            <ToggleJob handleClick={handleClick} isToggleOn={toggleJob} className="toggle-button" />
            <FaIcon className="fa fa-search side-glass" onClick={handleToggle} />
          </>
        )}

        <SearchResults
          value={value}
          data={jobs}
          renderResults={results => (
            <CardContainer>
              {results.map(job => (
                <div
                  className={toggleJob && job.location !== 'remote' ? 'hidden' : null}
                  key={job._id}
                >
                  <BlogCard key={job._id}>
                    <div className="description">
                      <Link
                        className="link-apply"
                        to={{
                          pathname: `/job/${job._id}`,
                        }}
                      >
                        <h5 className="position-name">{job.position_name}</h5>
                        <p className="place">
                          {job.workplace_name}{' '}
                          <span className="desktop-location">- {job.location}</span>{' '}
                        </p>
                        <p className="location-job">{job.location}</p>
                        <div className="text-description">{regexChange(job.description)}...</div>
                      </Link>
                    </div>
                  </BlogCard>
                </div>
              ))}
            </CardContainer>
          )}
        />
        <Footer />
      </>
    );
  }
}

JobCard.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  updateCurrent: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    jobs: state.job.jobs,
    loading: state.job.loading,
    value: state.job.value,
  }),
  { fetchJobs, updateCurrent }
)(JobCard);
