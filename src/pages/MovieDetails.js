// Core
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// Components
import Loader from 'react-loader-spinner';
import MovieCard from '../components/MovieCard/MovieCard';
// Pages
import Reviews from './Reviews';
import Cast from './Cast';
// Api
import * as MoviesAPI from '../services/movies_API';

export default class MovieDetailsPage extends Component {
  state = { movie: null, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    if (movieId) {
      MoviesAPI.getMovieById(movieId).then(movie =>
        this.setState({ isLoading: false, movie }),
      );
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.movie !== this.state.movie) {
  //     this.setState({ isLoading: true });
  //     const { movieId } = this.props.match.params;
  //     if (movieId) {
  //       MoviesAPI.getMovieById(movieId).then(movie =>
  //         this.setState({ isLoading: false, movie }),
  //       );
  //     }
  //   }
  // }

  handleGoBackBtn = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push('/movies');
  };

  render() {
    const { movie } = this.state;
    return this.state.isLoading ? (
      <Loader
        className="loader"
        type="TailSpin"
        color="#01d277"
        height={100}
        width={100}
        timeout={3000}
      />
    ) : (
      <div>
        {movie && <MovieCard movie={movie} onGoBack={this.handleGoBackBtn} />}
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
      </div>
    );
  }
}
