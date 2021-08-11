/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <p className="result">{result}</p>
    );
  }
}

Result.defaultProps = {
  result: '0',
};

Result.propTypes = {
  result: PropTypes.string,
};

export default Result;
