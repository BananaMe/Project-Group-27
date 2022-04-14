import React from "react";
import PropTypes from 'prop-types';
import {Button} from "../Button/Button";
import './card.css';

export const Card = ({ image, title, desc, like, button, ...props }) => {
    const liked = like ? 'a-button--liked' : 'a-button--disliked';
    return (
        <div className="card-movie">
            <div className='img'>
                <img src={`${image}`} style={{ width: "100%"}} />
            </div>

            <div className="description">
                <div>
                    <h2>{title}</h2>
                </div>
                <h5>
                    {desc}
                </h5>
                <Button label="MORE" rounded={true} color={"green"}
                            onClick={event => window.location.href = '/'}/>
            </div>
        </div>
    );
};

Button.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    like: PropTypes.func,
    button: PropTypes.func,
};

Button.defaultProps = {
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
    title: "Avatar",
    desc: "Avatar movie",
    like: undefined,
    button: undefined,
};