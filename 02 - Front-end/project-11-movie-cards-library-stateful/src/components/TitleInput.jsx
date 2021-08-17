import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { valueProp, on } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ valueProp }
          name="title"
          onChange={ on }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  valueProp: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default TitleInput;
