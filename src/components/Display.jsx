import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ expression, result }) => {
  return (
    <div className="display">
      <p className="expression">{ expression }</p>
      <p className="result">{ result }</p>
    </div>
  );
};

Display.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.number,
}

export default Display;
