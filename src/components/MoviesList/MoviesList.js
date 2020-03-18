// Core
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import MoviesListItem from '../MovieListItem/MovieListItem';
// Style
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => (
  <div>
    <ul className={styles.moviesList}>
      {movies.map(movie => (
        <MoviesListItem key={movie.id} {...movie} />
      ))}
    </ul>
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default withRouter(MoviesList);
