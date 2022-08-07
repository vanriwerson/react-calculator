import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, additionalClassName, onClickCallback }) => {
  return (
    <button
      type="button"
      className={ `button ${additionalClassName}`}
      onClick={ onClickCallback }
    >
      { label }
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  additionalClassName: PropTypes.string,
  onClickCallback: PropTypes.func,
}.isRequired;

export default Button;
