// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import React, {  useState } from "react";
import Axios from "axios";
// import "../App.css";
// import { useHistory } from "react-router-dom";

export default function Register() {

  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
 const register = () => {
    Axios.post("http://localhost:3001/accreg", {
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
        // props.history.push("/main");
    });
  };

    return (
      <div>
        <div className="d-flex align-items-center auth px-0 h-100">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" 
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
            placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" 
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          placeholder="Email" />
                  </div>
            
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg"           
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          
          placeholder="Password" />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                  <button onClick={register}> Register </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

