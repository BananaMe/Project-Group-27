import React from "react";

import "./login-page.css";
import image from "../../images/kinotekaLogo.JPG";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import userService from "../../../services/userService";

class RegisterPage extends React.Component {

  state = {
    //creating the data variable that holds the email and password to be passed on
    data: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cnfpassword: "",
    },
    // successMessage: "",
    // successMessageVisible: false,
    // errorMessage: "",
    // errorMessageVisible: false,
};

  handleChange = (e) => 
  
  {
  this.setState({
    
    data: {
        ...this.state.data,
        [e.target.name]: e.target.value
    }
})
  };


handlesubmit = (e) => {
  e.preventDefault();
  const userDto = {
    firstName: this.state.data.firstName,
    lastName: this.state.data.lastName,
    email: this.state.data.email,
    username: this.state.data.email,
    password: this.state.data.password,
    role: 'user'
  };
  userService.registerUser(userDto).then(() =>
    window.location.href = "http://localhost:3000/"
  );
}



  render() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={this.handlesubmit}>
            <h3>Register</h3>
            <div className="wrapper-credentials">
              <Input
                onChange={(e) => this.handleChange(e)}
                name="firstName"
                placeholder={"Enter your First Name"}
                label={"First Name"}
                isLabelTop
              />
              {/* <input type="text" onChange={this.handleChange} name="firstName"/> */}
              <Input
                onChange={this.handleChange}
                name="lastName"
                placeholder={"Enter your Last Name"}
                label={"Last Name"}
                isLabelTop
              />
            </div>
            <Input
              onChange={this.handleChange}
              name="email"
              placeholder={"Enter your Email"}
              label={"Email"}
              isLabelTop
            />
            <Input
              onChange={this.handleChange}
              name="password"
              placeholder={"Enter your Password"}
              label={"Password"}
              isLabelTop
            />
            <Input
              onChange={this.handleChange}
              name="cnfpassword"
              placeholder={"Confirm your Password"}
              label={"Confirm Password"}
              isLabelTop
            />
            <div>
              <br/><br/><br/>
            </div>
            <div className="row">
              <div className="col-6">
                <Button label="Create Account" rounded color={'grey'} onClick={this.handlesubmit}/>
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
