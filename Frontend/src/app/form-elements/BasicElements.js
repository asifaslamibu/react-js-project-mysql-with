// import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import bsCustomFileInput from 'bs-custom-file-input';
import React, {  useState } from "react";
import Axios from "axios";
export default function BasicElements() {

// export class BasicElements extends Component {
 
   const [nameReg, setnameReg] = useState("");
  const [desigReg, setdesigReg] = useState("");
  // const [ setEmployeeList] = useState([]);
  const register1 = () => {
    Axios.post("http://localhost:3001/register1", {
      name: nameReg,
      desig: desigReg,
    }).then((response) => {
      console.log(response);
    });
  };
      return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Form elements </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
              <li className="breadcrumb-item active" aria-current="page">Form elements</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description"> Basic form layout </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Username</label>
                    <Form.Control type="text" id="exampleInputUsername1" onChange={(e) => {
            setnameReg(e.target.value);
          }} placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control type="text" className="form-control"    onChange={(e) => {
            setdesigReg(e.target.value);
          }}id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  {/* <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                    <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                  </Form.Group>
                  */}
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <button  onClick={register1} className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
            </div>
          </div>
   
      </div>
    );
  }
