import React,{Component} from "react";
import "../CSS/login.css"

class Login extends Component {
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
      <React.Fragment>
        <div id="loginid">
        
          <>
           
            <div className="container-fluid">
              <div className="login-wrapper row">
                <div id="login" className="login display-center loginpage col-lg-offset-4 col-md-offset-3 col-sm-offset-3 col-xs-offset-0 col-xs-12 col-sm-6 col-lg-4">
                  <div className="login-form-header" >
                    
                      <div className="login-header">
                        <h4 className="bold ">Orego Welcomes You!</h4>
                        
                      </div>
                    </div>
                    <div className="box login">
                      <div className="content-body" style={{
                        paddingTop: "30px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "400px",  
                      }}>
                        <form id="msg_validate" action="" noValidate="novalidate" className="no-mb no-mt">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="form-group" style={{paddingBottom:"20px"}}>
                                <label className="form-label"><h4>Email</h4></label>
                                <div className="controls">
                                  <input type="text" id="user_email" name="user_email" value={data.user_email} className="form-control"
                                    placeholder="Please Enter Email" onChange={this.handleChange} />
                                  
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="form-label"><h4>Password</h4></label>
                                <div className="controls">
                                  <input maxLength={15} type="password" value={data.password}
                                   onChange={this.handleChange} name="password" className="form-control" placeholder="Please Enter Password" />
                                                            
                                </div>
                              </div>
                              
                              <div className="pull-left">
                                <button  style={{ marginLeft: "12rem" }}
                                  className="btn btn-primary mt-4 btn-corner log-stretched" onClick={this.doSubmit}>
                                  Login
                                </button>
                              </div>
                              <button style={{background:'none',border:'none'}}>                                
                                <label className="form-check-label  text-danger cursor_pointer mt-2" htmlFor="exampleCheck1" style={{marginLeft:'10rem'}}>
                                  Forgot Password?
                                </label>
                              </button>
                              <div className="text-center font-weight-light mt-3 d-flex" style={{marginLeft:'7rem',gap:'10px' }}>
                                Don't have an account?{" "}
                                <div className="text-dark cursor_pointer " style={{color: "rgb(255, 255, 255)", textDecoration: "underline",
                                    fontWeight: "bold",}}>
                                  <a href="register" style={{ color: "#0d6efd" }}>SignUp</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </>
            
          </div>
        </React.Fragment>
      );
    }
  }

export default Login;
