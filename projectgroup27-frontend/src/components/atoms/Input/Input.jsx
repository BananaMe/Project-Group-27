import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ isLabelTop, label, placeholder, name, ...props }) => {
  const labelPosition = isLabelTop ? 'label-top' : 'label-left';
  return (
    <div
      className={`a-input a-input__wrapper--${labelPosition}`}
      {...props}
    >
      <label className="a-input__label">{label}</label>
      <input className="a-input__input" name={name} placeholder={placeholder}/>
    </div>
  );
};

Input.propTypes = {
  isLabelTop: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func 
};

Input.defaultProps = {
  isLabelTop: false,
  onClick: undefined,
  
};
