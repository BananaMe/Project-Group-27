import React from "react";
import PropTypes from 'prop-types';
import {Button} from "../Button/Button";
import {FaHeart, FaStar} from "react-icons/fa";
import './card.css';

export const Card = ({image, title, desc, rating, isLiked, button, isFavorites, ...props}) => {
	const color = isLiked ? 'red' : 'grey';
	return (
		<div className="a-card">
			<div className='image'>
				<img src={`${image}`} style={{width: "100%"}}/>
			</div>
			{
				isFavorites ? (
					<>
						<div className="content">
							<div className="header">
								<div className="title">
									<span className="text">{title}</span>
								</div>
							</div>
						</div>
						<span className="buttons-block">
							<Button
								label="VIEW DETAILS"
								rounded
								color={"pink"}
								onClick={event => window.location.href = '/'}
							/>
							<Button
								label="REMOVE FROM FAVORITES"
								rounded
								color={"red"}
								onClick={event => window.location.href = '/'}
							/>
						</span>

					</>
				) : (
					<>
					<div className="content">
						<div className="header">
							<div className="title">
								<span className="text">{title}</span>
								<span className="rating">{rating}</span>
								<FaStar color="var(--pink)"/>
							</div>
							<button className="favorites">
								<FaHeart color={`var(--${color})`}/>
							</button>
						</div>
						<h5 className="description">
							{desc}
						</h5>
					</div>
						<Button
							label="MORE"
							color={"green"}
							onClick={event => window.location.href = '/'}
						/>
					</>
				)
			}
		</div>
	);
};

Button.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
	isLiked: PropTypes.bool,
	button: PropTypes.func,
	rating: PropTypes.number,
	isFavorites: PropTypes.bool
};

Button.defaultProps = {
	image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
	title: "Avatar",
	desc: "Avatar movie",
	isLiked: false,
	button: undefined,
	rating: 5,
	isFavorites: false
};