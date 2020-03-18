// Core
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Loader from 'react-loader-spinner';
import Navigation from '../Navigation/Navigation';
// Styles
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Async components
const AsyncHome = lazy(() =>
  import('../../pages/Home' /* webpackChunkName: "home-page" */),
);

const AsyncMovies = lazy(() =>
  import('../../pages/Movies' /* webpackChunkName: "movies-page" */),
);

const AsyncMovieDetails = lazy(() =>
  import(
    '../../pages/MovieDetails' /* webpackChunkName: "movieDetails-page" */
  ),
);

const AsyncNotFound = lazy(() =>
  import('../../pages/NotFound' /* webpackChunkName: "notFound-page" */),
);

function App() {
  return (
    <div className="App">
      <Navigation className="container" />
      <div className="container">
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
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/movies/:movieId" component={AsyncMovieDetails} />
            <Route path="/movies" component={AsyncMovies} />
            <Route component={AsyncNotFound} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
