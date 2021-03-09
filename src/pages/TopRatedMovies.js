
import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard';

import './Pages.scss';

const TopRatedMovies = () => {

 const [topRated, setTopRated] = useState({
 	isFetched: false,
 	data: [],
 	error: null
 })

   useEffect(() => {
	  axios.get('https://api.themoviedb.org/3/movie/top_rated', {
      params: {
       api_key: '4cfe16e4e02141d629e8aa2cb7c23fe6'
    }
  })
  .then(function (response) {
    setTopRated({
    	isFetched: true,
	 	data: response.data.results,
	 	error: false,
    })
  })
  .catch(function (error) {
	   setTopRated({
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
				topRated.isFetched ? (
					<div className="movies-holder container">
						{
							topRated.data.map((item, index) => (
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

export default TopRatedMovies;