import React from 'react';
import PropTypes from 'prop-types';

import './toggle.scss';

const ToggleJob = props => {
  const { className, handleClick, isToggleOn } = props;
  return (
    <div className={className}>
      <div className="button-wrapper">
        <div className="slider" />
        <button type="button" onClick={handleClick} className={!isToggleOn ? 'green' : 'red'}>
          {!isToggleOn ? 'Hot' : 'Remote'}
        </button>
      </div>
    </div>
  );
};

ToggleJob.defaultProps = {
  isToggleOn: undefined,
};

ToggleJob.propTypes = {
  className: PropTypes.string.isRequired,
  isToggleOn: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default ToggleJob;
