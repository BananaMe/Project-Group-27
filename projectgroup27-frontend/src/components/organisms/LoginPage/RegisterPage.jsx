import React from "react";

import "./login-page.css";
import image from "../../images/kinotekaLogo.JPG";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import * as BSIcons from "react-icons/bs";

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h3 style={{marginTop:'-30px'}}>Register</h3>
            <div>
              <br></br>
              
            </div>
            <Input
              placeholder={"Enter your First Name"}
             
             
            />
            <Input
              placeholder={"Enter your Last Name"}
              
            />
            <Input
              placeholder={"Enter your Email"}
              
             
            />
            <Input
              placeholder={"Enter your Password"}
             
            />
            <Input
              placeholder={"Confirm your Password"}
              
            />
            <div>
              <br/><br/><br/>
            </div>
            <div className="row">
              <div className="col-6">
                <Button label="Create Account" rounded={true} onClick={event => window.location.href='/'}/>
              </div>
              
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <img
                src={image}
                alt="Logo"
                style={{ width: "70%", marginTop: "-50px" }}
              />
              <p
                style={{
                  font: "Roboto",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                "I'm gonna make him an offer he can't refuse." The Godfather
                (1972)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterPage;
