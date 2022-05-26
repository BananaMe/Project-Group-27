import React from 'react';

import './all-movies.css';
import {Card} from "../../atoms/Card/Card";
import filmService from '../../../services/filmService';

class AllMovies extends React.Component {

	state = {
		films: []
	};

	//da se dosredi
	getFilms() {
		debugger;
		filmService.listMovies()
			.then((response) => response.data)
			.then((data) => {
			  this.setState({
				films: data,
			  });
			});
	  }
	
	  async componentDidMount() {
		  await this.getFilms();
	  }

	render() {
		return (
			<div className="all-movies">
				<Card
					image={"https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"}
					title={"Avatar"}
					desc={"Description about the movie. Description about the movie. Description about the movie"}
					isLiked
					rating={5}
				/>
				<Card
					image={"https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"}
					title={"Avatar"}
					desc={"Description about the movie. Description about the movie. Description about the movie"}
					isLiked
					rating={5}
				/>
				<Card
					image={"https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"}
					title={"Avatar"}
					desc={"Description about the movie. Description about the movie. Description about the movie"}
					isLiked
					rating={5}
				/>
			</div>
		);
	}
}

export default AllMovies;