import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { valueProp, on } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ valueProp }
          onChange={ on }
        >
          {/* Inputs consertados graças à ajuda do Eduardo Prando e Lucas Caribé. */}
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  valueProp: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};

export default GenreInput;
