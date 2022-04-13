import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ rounded, color, label, ...props }) => {
  const shape = rounded ? 'a-button--rounded' : 'a-button--squared';
  return (
    <button
      type="button"
      className={['a-button', `a-button--${color}`, shape].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
  color: PropTypes.oneOf(['red', 'pink', 'green', 'grey', 'darkgrey', 'black']),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  rounded: false,
  color: 'darkgrey',
  onClick: undefined,
};
