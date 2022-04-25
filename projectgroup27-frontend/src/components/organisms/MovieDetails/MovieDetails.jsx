import React from 'react';

import './movie-details.css'

import {Button} from '../../atoms/Button/Button';

class MovieDetails extends React.Component {
    render() {
        return (
            <div id="movieDetails">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
                    id="slika1"
                    alt="alternatetext"
                />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <iframe
                    width="740"
                    height="370"
                    src="https://www.youtube.com/embed/4jNpnzpWqqI"
                />
                <br></br><br></br>
                <div id="outer">
                    <div class="inner"><Button
                        id="btnDef"
                        label="Action"
                        rounded={false} color={"pink"}
                    />&nbsp;&nbsp;</div>
                    <div class="inner"><Button
                        id="btnDef"
                        label="Crime"
                        rounded={false} color={"pink"}
                    />&nbsp;&nbsp;</div>
                    <div class="inner"><Button
                        id="btnDef"
                        label="Drama"
                        rounded={false} color={"pink"}
                        disabled

                    />&nbsp;&nbsp;</div>
                    <br></br><br></br><br></br>
                </div>
                <label id="description">Description: American epic science fiction film</label>
                <br></br><br></br>
                <label id="director">Director: James Cameron</label>
                <br></br><br></br>
                <label id="writers">Writers: James Cameron, Josh Friedman</label>
                <br></br><br></br>
                <label id="stars">Stars: Sam Worthington, Vin Diesel, Edie Falco...</label>
                <div>
                    <br></br><br></br><br></br>
                    <Button
                        onClick={event => window.location.href = '/all-movies'}
                        id="btnBack"
                        label="BACK"
                        rounded={true} color={"red"}

                    />
                </div>
            </div>


        );
    }
}

export default MovieDetails;