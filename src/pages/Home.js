// Core
import React, { Component } from 'react';
// Components
import Loader from 'react-loader-spinner';
import MoviesList from '../components/MoviesList/MoviesList';
// API
import * as MoviesAPI from '../services/movies_API';

export default class HomePage extends Component {
  state = { movies: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    MoviesAPI.getTrending().then(movies =>
      this.setState({ isLoading: false, movies }),
    );
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {isLoading ? (
          <Loader
            className="loader"
            type="TailSpin"
            color="#01d277"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          <MoviesList movies={movies} />
        )}
      </>
    );
  }
}
