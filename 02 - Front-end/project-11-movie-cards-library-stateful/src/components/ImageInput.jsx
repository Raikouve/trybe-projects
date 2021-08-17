import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  render() {
    const { valueProp, on } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ valueProp }
          name="imagePath"
          onChange={ on }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  valueProp: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default ImageInput;
