import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Axios from "axios";
// import "../App.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [loginStatus, setLoginStatus] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  Axios.defaults.withCredentials = true;
  let history = useHistory();
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        console.log(response.data[0].username);  
        history.push("/dashboard");
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  // render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" size="lg"  onChange={(e) => {
            setUsername(e.target.value);
          }} className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password"  onChange={(e) => {
            setPassword(e.target.value);
          }} size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                  <button onClick={login}> Login </button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    {/* <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Forgot password?</a> */}
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                  </div>
                </Form>
      <h1>{loginStatus}</h1>
              </div>
            </div>
          </div>
        </div>  
        
      </div>
    );
  }
