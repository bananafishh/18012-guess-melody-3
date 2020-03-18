import React from 'react';
import PropTypes from 'prop-types';

const GamerErrors = (props) => {
  const {count} = props;

  if (count === 0) {
    return null;
  }

  return (
    <div className="game__mistakes">
      {new Array(count).fill(``).map((it, index) => (
        <div key={`error-${index}`} className="wrong"></div>
      ))}
    </div>
  );
};

GamerErrors.propTypes = {
  count: PropTypes.number.isRequired,
};

export default GamerErrors;
