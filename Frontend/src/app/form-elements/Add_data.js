// import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import bsCustomFileInput from 'bs-custom-file-input';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import Axios from "axios";
import React, {  useState } from "react";

export default function Add_data() {

// export class BasicElements extends Component {
 
    const [regno, setRegno] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [name, setName] = useState("");
    const [enginno, setEnginno] = useState("");
    const [chasisno, setChasisno] = useState("");
    const [auto, setAuto] = useState("");

  Axios.defaults.withCredentials = true;
  let history = useHistory();

  const addvehicle = () => {
    Axios.post("http://localhost:3001/vehicle", {
        regno: regno,
        make: make,
        model: model,
        name: name,
        enginno: enginno,
        chasisno: chasisno,
        auto: auto,
    }).then((response) => {
      console.log(response);
      
    });
    history.push("/vmaster");
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
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description"> Basic form layout </p>
                <form className="forms-sample">
                <Form.Group>
                    <label htmlFor="exampleInputUsername1">Reg No.</label>
                    <Form.Control type="text" id="exampleInputUsername1"placeholder="Reg No."  onChange={(event) => {
            setRegno(event.target.value);
          }}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Make</label>
                    <Form.Control type="text" className="form-control" placeholder="Make"  onChange={(event) => {
            setMake(event.target.value);
          }} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Model</label>
                    <Form.Control type="text" id="exampleInputUsername1"placeholder="Model"  onChange={(event) => {
            setModel(event.target.value);
          }}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Vehicle Name</label>
                    <Form.Control type="text" className="form-control" placeholder="Vehicle Name"  onChange={(event) => {
            setName(event.target.value);
          }} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Engin No.</label>
                    <Form.Control type="text" id="exampleInputUsername1"placeholder="Engin No."  onChange={(event) => {
            setEnginno(event.target.value);
          }}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Chasis No.</label>
                    <Form.Control type="text" className="form-control" placeholder="Chasis No."   onChange={(event) => {
            setChasisno(event.target.value);
          }}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Auto / Menual</label>
                    <Form.Control type="text" className="form-control" placeholder="Auto / Menual"  onChange={(event) => {
            setAuto(event.target.value);
          }} />
                  </Form.Group>
                  <button  onClick={addvehicle} className="btn btn-primary mr-2">Submit</button>
                    <Link
                to="/Vmaster"
                className="btn btn-dark">
Cancel              </Link>
                  {/* <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
            </div>
          </div>
   
      </div>
    );
  }
