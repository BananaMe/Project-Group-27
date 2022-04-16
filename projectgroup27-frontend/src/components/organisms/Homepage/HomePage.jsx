import React from 'react';

import image from "../../images/cinema.jpg";
import './home-page.css';
import {Button} from '../../atoms/Button/Button';

class HomePage extends React.Component {
    render() {
        return (
                <div className="img">
                    <img src={image} alt="Cinema" style={{width: '100%'}}/>
                  <div className="welcome-text">
                    <div>
                      <h1 className="title"><b>Welcome to our website!</b></h1>
                      <div className="text">Catch films before everyone</div>
                      <div className="button">
                        <Button
                          label="LETS EXPLORE"
                          rounded={true} color={"red"}
                          onClick={event => window.location.href = '/'}
                          style={{ minWidth: "190px", width: "auto"}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
    }
}

export default HomePage;