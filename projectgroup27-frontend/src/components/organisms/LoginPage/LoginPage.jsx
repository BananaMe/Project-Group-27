import React from 'react';

import './login-page.css';
import image from "../../images/kinotekaLogo.JPG";
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import {Link} from "react-router-dom";
import userService from '../../../services/userService';
const AUTH_TOKEN = "auth_token";
const EMAIL = "email";
const ROLE = "role";

class LoginPage extends React.Component {

    state = {
        data: {
          email: "",
          password: "",
          
        },
        // errorMessage: "",
        // errorMessageVisible: false,
      };
    

      handleChange = (e) =>
        this.setState({
          data: { ...this.state.data, [e.target.name]: e.target.value },
        });
  

        handlesubmit = (e) => {
            e.preventDefault();
            const userDtoLogin = {
              username: this.state.data.email,
              password: this.state.data.password
            };
            
            userService.loginUser(userDtoLogin).then((res) => {
              var token = res.data.split(" ")[1];
              var email = this.parseJwt(token).sub;
              localStorage.setItem(AUTH_TOKEN, token);
              localStorage.setItem(EMAIL, email);
              localStorage.setItem(ROLE, this.parseJwt(token).role);
              this.props.loginUser(email)
              window.location.href = "http://localhost:3000/homepage"
            }
            );
          }

          parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        
            return JSON.parse(jsonPayload);
        };
    
    

    render() {

   

    return (
        <div className="container" id="container">
        <div className="form-container sign-in-container">
            <form action="#" onSubmit={this.handlesubmit}>
                <h3>Log In</h3> 
                <div><br></br><br></br><br></br></div>
                <Input placeholder={'Enter your Email'} label={'Email'} isLabelTop onChange={this.handleChange} name="email"/>
                <Input placeholder={'Enter your Password'}  label={'Password'} isLabelTop onChange={this.handleChange} name="password"/>
                <a href="#" style={{font:'Roboto', fontWeight:'bold', fontStyle:"italic", marginTop:'-5px', marginLeft:'240px'}}>Forgot your password?</a>
                <div><br></br></div>
                <Link to={'/homepage'}>
                    <Button label="Login" rounded color={"black"} onClick={this.handlesubmit}/>
                </Link>
                <Link to={'/register'}>
                    <Button label="Register" rounded color={"grey"} />
                </Link>
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