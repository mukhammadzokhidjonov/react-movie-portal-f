import { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard';
import ActorsCard from '../components/ActorsCard/index.js';

import backdrop from '../assets/images/dry.jpg';
import './Pages.scss';

const LastMovies = () => {

	const [lastMovies, setLastMovies] = useState({
		isFetched: false,
		data: [],
		error: null
	})

	const [actorsList, setActorsList ] = useState({
		isFetched: false,
		data: [],
		error: null
	})

	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/movie/latest', {
			params: {
				api_key: '4cfe16e4e02141d629e8aa2cb7c23fe6'
			}
		})
			.then(function (response) {
				setLastMovies({
					isFetched: true,
					data: response.data,
					error: false
				})
			})
			.catch(function (error) {
				setLastMovies({
					isFetched: true,
					data: [],
					error: error
				})
			})
			.then(function () {

			});

	}, [])

	console.log(lastMovies.data)
	return (
		<div>
			{
				lastMovies.isFetched ? (
					<div className="last-movies">
						<img src={backdrop} alt="" className="last-movies-back" />

						<div className="last-movies-front container">
							<img src={`https://image.tmdb.org/t/p/w500/${lastMovies.data.poster_path}`} alt="" className="last-movies-poster" />
							<div className="last-movie-front-info">
								<h3> {lastMovies.data.title} </h3>
								<h3>{lastMovies.data.original_title}</h3>
								<p>{lastMovies.data.overview}</p>
								<h4>Budget ${lastMovies.data.budget}</h4>
								<h4>Release date: {lastMovies.data.release_date}</h4>
								<h4>Duration: {lastMovies.data.runtime} mins</h4>
								<a href={lastMovies.data.homepage} target="_blank">Official site</a>

								{
									lastMovies.data.genres.map((genre, index) => {
										<button key={index}>{genre.name}</button>
									})
								}

								
							</div>
						</div>

					</div>
				) : (
					<h1>Sabr...</h1>
				)	
			}
		</div>
	)
}

export default LastMovies;
