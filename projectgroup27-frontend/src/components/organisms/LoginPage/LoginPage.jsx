import React from 'react';

import './login-page.css';
import image from "../../images/kinotekaLogo.JPG";
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import * as Font from "react-icons/bs";
class LoginPage extends React.Component {
    

render() {

    return (
       
        <div className="container" id="container">
        <div className="form-container sign-in-container">
            <form action="#">
                <h3>Log In</h3> 
                <div><br></br><br></br><br></br></div>
                <Input placeholder={'Enter your Email'} label={'Email'} isLabelTop={true}/>
                <Input placeholder={'Enter your Password'}  label={'Password'} isLabelTop={true}/>
                <a href="#" style={{font:'Roboto', fontWeight:'bold', fontStyle:"italic", marginTop:'-5px', marginLeft:'240px'}}>Forgot your password?</a>
                <div><br></br></div>
                <Button label="Login" rounded={true}/>
                <div><br></br></div>
                <Button label="Register" rounded={true} onClick={event => window.location.href='/register'}/>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                <img src={image} alt="Logo" style={{ width: '70%', marginTop:'-50px'}} />
                    <p style={{font:'Roboto', fontWeight:'bold', fontStyle:"italic"}}>"I'm gonna make him an offer he can't refuse." The Godfather (1972)</p>
                    
                </div>
            </div>
        </div>
    </div>
    
    
        
        

    );
}
}
export default LoginPage;   