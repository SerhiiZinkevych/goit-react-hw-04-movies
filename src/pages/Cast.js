// Core
import React, { Component } from 'react';
// Components
import Loader from 'react-loader-spinner';
import CastList from '../components/CastList/CastList';
// API
import * as MoviesAPI from '../services/movies_API';

export default class Cast extends Component {
  state = { cast: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    MoviesAPI.getMovieCredits(movieId).then(({ cast }) =>
      this.setState({ isLoading: false, cast }),
    );
  }

  render() {
    const { cast } = this.state;
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
      <CastList cast={cast} />
    );
  }
}
