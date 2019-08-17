import React from 'react';
import PropTypes from 'prop-types';

import FaIcon from '../../assets/FaIcon';
import './Input.css';

const MainInput = props => {
  const { onClick, className, placeholder, type, value, onChange } = props;
  return (
    <div className="input-container">
      <FaIcon className="fa fa-search input-glass" onClick={onClick} />
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

MainInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MainInput;
