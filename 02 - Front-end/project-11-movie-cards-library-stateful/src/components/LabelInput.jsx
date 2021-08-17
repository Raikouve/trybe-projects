import React from 'react';
import PropTypes from 'prop-types';

class LabelInput extends React.Component {
  render() {
    const { htmlFor, id, text } = this.props;
    return (
      <label htmlFor={ htmlFor } data-testid={ `${id}-input-label` }>{text}</label>
    );
  }
}

LabelInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LabelInput;
