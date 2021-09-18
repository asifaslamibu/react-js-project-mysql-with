// import React, { Component } from 'react';
// import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import bsCustomFileInput from 'bs-custom-file-input';
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function BasicElements2() {
  const params = useParams();

  
  const [name, setName] = useState(0);
  // const [name, setNewWage] = useState(0);

  const [nameList,setNameList]= useState([])



  let history = useHistory();
  const updateEmployeeWage = (id) => {
    
    console.log(id)
    console.log(name)
    Axios.put("http://localhost:3001/update", { name: name, id: id }).then(
      (response) => {
          setNameList(
          nameList.map((val) => {
            history.push("/tables/basic-table");
            return val.id = id
              ? {
                  name: val.name,
                }
              : val;
          })
    )
      }
    );
  };




    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get(`http://localhost:3001/form/${params.id}`).then((response) => {
      setNameList(response.data);
        console.log(response.data);
      // if (response.data.loggedIn == true) {
      //     setRole(response.data.user[0].role);
      //   }
      });
    }, []);

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
            {/* {setNameList.map((val, key) => {
              return ( */}
              <div className="card-body">
                <h4 className="card-title">Edit form</h4>
                <p className="card-description"> Edit form layout </p>
                {nameList.map((val)=>{
    return <>
              <div>
                           
                <input
                  type="text"   
                  placeholder={val.name}
                  // value={val.name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  
                />
                    <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                 {" "}
                 
                  Update
                </button>
                
                <Link
                to="/tables/basic-table"
                className="badge badge-warning"
              >
                Cancel
              </Link>
                  </div>
                  </>
                })}
              </div>
            </div>
            </div>
          </div>
   
      </div>
   );

  }
  