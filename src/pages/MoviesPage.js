
import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard';

import './Pages.scss';

const MoviesPage = () => {

 const [moviesPageList, setMoviesPageList ] = useState({
 	isFetched: false,
 	data: [],
 	error: null
 })

   useEffect(() => {
	  axios.get('https://api.themoviedb.org/3/movie/popular?page=1', {
      params: {
       api_key: '8d08d31e1b08de961a19e2ae293de867'
    }
  })
  .then(function (response) {
    setMoviesPageList({
    	isFetched: true,
	 	data: response.data.results,
	 	error: false,
    })
  })
  .catch(function (error) {
	   setMoviesPageList({
	   	isFetched: true,
	 		data: [],
	 		error: error,
	   })
  })
  .then(function () {
  
  }); 
   }, [])

	return (
		<div>
			{
				moviesPageList.isFetched ? (
					<div className="movies-holder container">
						{
							moviesPageList.data.map((item, index) => (
								<MovieCard

								id={item.id}
								imgLink={item.poster_path}
								title={item.title}
								key={index}
								rating={item.vote_average}
								releaseDate={item.release_date}
								/>
							))
						}
					</div>
					) : (
					<h1>Sabr...</h1>
					)
			}
		</div>	
	)
}

export default MoviesPage;