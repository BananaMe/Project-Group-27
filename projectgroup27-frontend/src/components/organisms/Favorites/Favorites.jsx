import React from 'react';

import './favorites.css';
import {Card} from "../../atoms/Card/Card";

class Favorites extends React.Component {
	render() {
		return (
			<div className="favorites">
				<Card
					image="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
					title= "Avatar"
					isFavorites
				/>
				<Card
					image = "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
					title = "Avatar"
					isFavorites
				/>
			</div>
		);
	}
}

export default Favorites;