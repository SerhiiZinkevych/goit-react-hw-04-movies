// Core
import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
// Components
import Loader from 'react-loader-spinner';
import MovieCard from '../components/MovieCard/MovieCard';
// Api
import * as MoviesAPI from '../services/movies_API';
// Async components
const AsyncReviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews-page" */),
);

const AsyncCast = lazy(() =>
  import('./Cast' /* webpackChunkName: "cast-page" */),
);

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
        <Suspense
          fallback={
            <Loader
              className="loader"
              type="TailSpin"
              color="#01d277"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <Route
            path={`${this.props.match.path}/reviews`}
            component={AsyncReviews}
          />
          <Route path={`${this.props.match.path}/cast`} component={AsyncCast} />
        </Suspense>
      </div>
    );
  }
}
