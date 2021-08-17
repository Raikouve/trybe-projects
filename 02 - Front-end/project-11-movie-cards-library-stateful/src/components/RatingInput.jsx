import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { valueProp, on } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ valueProp }
          name="rating"
          onChange={ on }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  valueProp: PropTypes.number.isRequired,
  on: PropTypes.func.isRequired,
};

export default RatingInput;
