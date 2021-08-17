import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends Component {
  render() {
    const { valueProp, on } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ valueProp }
          name="storyline"
          onChange={ on }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  valueProp: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default StorylineInput;
