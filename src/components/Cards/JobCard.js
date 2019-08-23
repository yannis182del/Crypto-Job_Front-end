/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchResults from 'react-filter-search';
import { connect } from 'react-redux';
import LoadingSpinner from '../Loading-Spinner/LoadingSpinner';
import FaIcon from '../../assets/FaIcon';
import MainInput from '../Input/Input';
import ToggleJob from '../Toggle/ToggleJob';
import Footer from '../footer/Footer';
import Cards from './Cards';

import { fetchJobs, updateCurrent } from '../../redux/reducers/job';

import { CardContainer } from './styled';

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
        {toggle ? (
          <MainInput
            onClick={handleToggle}
            className="main-input"
            placeholder="Find A Job..."
            type="text"
            value={value}
            onChange={handleInputChange}
          />
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
                  <Cards
                    jobId={job.jobId}
                    id={job._id}
                    pathId={job._id}
                    positionNames={job.position_name}
                    workplaceNames={job.workplace_name}
                    locations={job.location}
                    locationJobs={job.location}
                    description={job.description}
                  />
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
