import React from 'react';
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

export default ToggleJob;
