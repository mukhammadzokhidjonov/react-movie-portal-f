import { Link } from 'react-router-dom';

import './ActorsCard.scss';

const ActorsCard = ({id, name, charName, imgLink}) => {
	return (
		<Link to={`/actor/${id}`} className="actors-card">
			<div>
				<img src={imgLink} alt="" />
				<h4>{name}</h4>
				<h5>{charName}</h5>
			</div>
		</Link>
	)
}

export default ActorsCard;