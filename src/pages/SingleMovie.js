import { useEffect, useState } from 'react';
import axios from 'axios';

import ActorsCard from '../components/ActorsCard/index.js'

const SingleMovie = ({match}) => {

const [moviesInfo, setMovieInfo ] = useState({
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
	axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
    params: {
       api_key: '8d08d31e1b08de961a19e2ae293de867'
    }
  })
  .then(function (response) {
    setMovieInfo({
    	isFetched: true,
	 	data: response.data,
	 	error: false,
    })
  })
  .catch(function (error) {
	   setMovieInfo({
	   	isFetched: true,
	 		data: [],
	 		error: error,
	   })
  })
  .then(function () {
  
  }); 

  axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
    params: {
       api_key: '8d08d31e1b08de961a19e2ae293de867'
    }
  })
  .then(function (response) {
    setActorsList({
    	isFetched: true,
	 	data: response.data,
	 	error: false,
    })
  })
  .catch(function (error) {
	   setActorsList({
	   	isFetched: true,
	 		data: [],
	 		error: error,
	   })
  })
  .then(function () {
  
  }); 
}, [])

console.log(actorsList.data)

const movieCastActor = actorsList.data.cast;
console.log(movieCastActor);

	return (	
		<div>
			{
				moviesInfo.isFetched ? (
					<div className="movie-info">
						<img className="movie-info-back" src={`https://image.tmdb.org/t/p/w500/${moviesInfo.data.backdrop_path}`} alt="" />

						<div className="movie-info-front container">
							<img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${moviesInfo.data.poster_path}`} alt="" />
							 <div className="front-info">
								<h1>{moviesInfo.data.title}</h1>
								<h2>{moviesInfo.data.original_title}</h2>
								<p>{moviesInfo.data.overview}</p>
								<h4>Budget ${moviesInfo.data.budget}</h4>
								<h4>Release date: <span>{moviesInfo.data.release_date}</span></h4>	
								<h4>Duration: {moviesInfo.data.runtime} min.</h4>
			
								<a href={moviesInfo.data.homepage} target="_blank">Official site</a>
			
								{
									moviesInfo.data.genres.map((genre, index) => (
											<button key={index}>{genre.name}</button>
									))
								}

								<h2>Artisla</h2>
									{
										actorsList.isFetched ? (
											<div className="actors-list">
												{
													actorsList.data.cast.map((actor, index) => (
														<ActorsCard
														id={actor.id}
														key={index}
														name={actor.name}
														charName={actor.character}
														imgLink={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
														/>
													))
												}
											</div>
											) :

										 (
										 	<h2>Sabrrrr !</h2>
										 )
									}

							 </div>
						</div>
					</div>
				) : (
					<h2>Sabrni tegi oltin...</h2>
				)
			}
		</div>
	)
}

export default SingleMovie;