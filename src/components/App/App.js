// Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import HomePage from '../../pages/Home';
import MoviesPage from '../../pages/Movies';
import MovieDetailsPage from '../../pages/MovieDetails';
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../../pages/NotFound';
// Styles
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function App() {
  return (
    <div className="App">
      <Navigation className="container" />
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
