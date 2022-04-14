import React from 'react';

import image from "../../images/cinema.jpg";
import './home-page.css';
import {Button} from '../../atoms/Button/Button';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="img">
                    <img src={image} alt="Cinema" style={{width: '100%'}}/>
                </div>
                <div className="welcome-text">
                    <div>
                        <h1>Welcome to our website!</h1>
                        <div className="text">Catch films before everyone</div>
                        <div className="button">
                            <Button label="LETS EXPLORE" rounded={true} color={"red"}
                                    onClick={event => window.location.href = '/'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;