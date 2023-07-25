import React, { Component } from "react";
import "../CSS/login.css";
import backgroundImage from "../Images/cam.jpg"; // Path to the background image

class Loginpage extends Component {
  state = {
    data: {
      user_email: "",
      password: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ data });
  };

  doSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { data } = this.state;

    return (
      <div className="container-fluid" style={{width:"100%"}}>
        <div className="row">
          {/* Left-side image section */}
          <div className="col-lg-6 d-none d-lg-block p-0">
            <div className="login-image-container">
              <img src={backgroundImage} alt="Login Background" className="login-image" />
            </div>
          </div>

          {/* Right-side login form section */}
          <div className="col-lg-6 col-md-12">
            <div className="login-form-container">
              <div className="login-form-header">
                <h4 className="bold">Login Now!</h4>
                <h4>
                  <small>Please enter your data to Login.</small>
                </h4>
              </div>
              <div className="login-form-body">
                <form onSubmit={this.doSubmit}>
                  <div className="form-group">
                    <label htmlFor="user_email">Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={data.user_email}
                      className="form-control"
                      placeholder="Enter Email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={data.password}
                      className="form-control"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  <div className="forgot-password">
                    <a href="#" className="text-danger">
                      Forgot Password?
                    </a>
                  </div>
                </form>
                <div className="signup-link">
                  Don't have an account? <a href="register">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
