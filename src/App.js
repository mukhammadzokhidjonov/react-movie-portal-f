import React from 'react';
import { useState, useEffect } from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import LastMovies from './pages/LastMovies.js';
import MoviesPage from './pages/MoviesPage.js';
import PopularsPage from './pages/PopularsPage.js';
import SingleMovie from './pages/SingleMovie.js';
import TopRatedMovies from './pages/TopRatedMovies.js';
import TvShows from './pages/TvShows.js';
import UpcomingMovies from './pages/UpcomingMovies.js';
import ActorFilms from './pages/ActorFilms.js';

import Header from './containers/Header/index.js';
import Sidebar from './containers/Sidebar/index.js';
import './assets/styles/main.scss';

function App() {

  const [sidebarState, setSidebarState] = useState(false)

  return (
  	<Router>

  	<Header sidebarState={sidebarState} setSidebarState={setSidebarState}/>
    <Sidebar isOpened={sidebarState} />
  		<Switch>

  		<Route exact path='/' component={HomePage} />
  		<Route exact path='/movies' component={MoviesPage} />
  		<Route exact path='/populars' component={PopularsPage} />
  		<Route exact path='/movie/:id' component={SingleMovie} />
		<Route exact path='/last_movies' component={LastMovies} />
		<Route exact path='/top_rated' component={TopRatedMovies} />
		<Route exact path='/tv_shows' component={TvShows} />
		<Route exact path='/upcoming' component={UpcomingMovies} />
		<Route exact path='/movie/actor/:id' component={ActorFilms} />
		
  		</Switch>
  	</Router>
  );
}

export default App;
