import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ isLabelTop, label, placeholder, ...props }) => {
  const labelPosition = isLabelTop ? 'label-top' : 'label-left';
  return (
    <div
      className={`a-input a-input__wrapper--${labelPosition}`}
      {...props}
    >
      <label className="a-input__label">{label}</label>
      <input className="a-input__input" placeholder={placeholder}/>
    </div>
  );
};

Input.propTypes = {
  isLabelTop: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  isLabelTop: false,
  onClick: undefined,
};
