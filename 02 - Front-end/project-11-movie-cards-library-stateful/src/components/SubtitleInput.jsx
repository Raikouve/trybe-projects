import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { valueProp, on } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ valueProp }
          name="subtitle"
          onChange={ on }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  valueProp: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default SubtitleInput;
