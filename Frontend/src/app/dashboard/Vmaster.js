import React, { Component, useEffect, useState  } from 'react'
import { ProgressBar } from 'react-bootstrap';
  import Axios from "axios";
  import { Form } from 'react-bootstrap';
  // import { Link } from 'react-router';
  import { Link } from 'react-router-dom'
  export default function Vmaster() {
 const [ setEmployeeList] = useState([]);
 const [nameList,setNameList]= useState([])
    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:3001/vehicle").then((response) => {
      setNameList(response.data);
        // console.log(response.data);
      // if (response.data.loggedIn == true) {
        //   setRole(response.data.user[0].role);
        // }
      });
    }, []);

    const deleteEmployee1 = (id) => {
      Axios.delete(`http://localhost:3001/vehicle/${id}`).then((response) => {
        setNameList(
          nameList.filter((val) => {
            return val.id != id;
          })
        );
      });
    };



    return (
      
      <div>
        <div className="page-header">
          <h3 className="page-title"> Basic Tables </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
      
        <div className="row">
        <div className="row">
       
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
        <Link
                to="/form-elements/Add_data"
                className="btn btn-primary btn-fw"
              >
                Add
              </Link>
     
                <h4 className="card-title">Bordered table</h4>
                <p className="card-description"> Add className <code>.table-bordered</code>
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                      <th> Register No </th>
                        <th> Make</th>
                        <th>Model</th>
                        <th> Engin No </th>
                        <th> Chasis No </th>
                        <th> Auto / Menual </th>
                        <th> ProgressBar   </th>
                        <th> Delete </th>
                        <th> Update </th>

                      </tr>
                    </thead>
                    <tbody>
                    {nameList.map((val)=>{
    return <>
                      <tr>
                      <td>{val.regno}</td>
                        <td>{val.make}</td>
                        <td>{val.model}</td>
                        <td>{val.enginno}</td>
                        <td>{val.chasisno}</td>
                        <td>{val.auto}</td>
                        <td>
                          <ProgressBar variant="success" now={5} />
                        </td>
                        <td> <button className="btn btn-primary mr-2"
                  onClick={() => {
                    deleteEmployee1(val.id);
                  }}
              >
                  Delete
                </button>

                </td>
                      
                    <td>
                    <Link
                to={"/form-Elements/edit_data/" + val.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
                
                 </td>
                      </tr>
                  
                      </>
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        
       
        </div>
        </div>
        
      </div>
    );

}
