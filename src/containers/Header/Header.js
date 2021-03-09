
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({sidebarState, setSidebarState}) => {
	return (
		
		<div className="header">
		<button onClick={() => setSidebarState(!sidebarState)}>Menu</button>
			<Link to="/" className="header-link">Home</Link> 
			<Link to="/movies" className="header-link">Movies</Link>
			<Link to="/populars" className="header-link">Populars</Link>
			<Link to="/last_movies" className="header-link">Last Movies</Link>
			<Link to="/top_rated" className="header-link">Top Rated</Link>
			<Link to="/tv_shows" className="header-link">Tv Shows</Link>
			<Link to="/upcoming" className="header-link">Upcoming Movies</Link>
		</div>
	)
}

export default Header;