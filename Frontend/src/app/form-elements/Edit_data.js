import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'


export default function Edit_data() {
  const params = useParams();

  const [regno, setRegno] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [enginno, setEnginno] = useState("");
  const [chasisno, setChasisno] = useState("");
  const [auto, setAuto] = useState("");
  const [nameList, setNameList] = useState([])


  let history = useHistory();
  const vupdate = (id) => {
    // make:make,model:model,name:name,enginno:enginno,chasisno:chasisno,auto:auto,

    console.log(id)
    console.log(regno)
    console.log(make)
    console.log(model)
    console.log(name)
    console.log(enginno)
    console.log(chasisno)
    console.log(auto)
    Axios.put("http://localhost:3001/vupdate", { regno: regno, make: make, model: model, name: name, enginno: enginno, chasisno: chasisno, auto: auto, id: id }).then(
      (response) => {
        setNameList(
          nameList.map((val) => {
            history.push("/vmaster");
            return val.id = id
              ? {
                regno: val.regno,
                make: val.make,
                model: val.model,
                name: val.name,
                enginno: val.enginno,
                chasisno: val.chasisno,
                auto: val.auto
              }
              : val;
          })
        )
      }
    );
  };




  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get(`http://localhost:3001/editform/${params.id}`).then((response) => {
      setNameList(response.data);
      console.log(response.data);
      // if (response.data.loggedIn == true) {
      //     setRole(response.data.user[0].role);
      //   }
      setRegno(response.data[0]["regno"])
      setMake(response.data[0]["make"])
      setModel(response.data[0]["model"])
      setName(response.data[0]["name"])
      setEnginno(response.data[0]["enginno"])
      setChasisno(response.data[0]["chasisno"])
      setAuto(response.data[0]["auto"])
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
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            {nameList.map((val) => {
              return <>
                <div className="card-body">
                  <h4 className="card-title">Default form</h4>
                  <p className="card-description"> Basic form layout </p>

                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Reg No.</label>
                    <Form.Control type="text" className="form-control" defaultValue={val.regno}

                      onChange={(e) => {
                        setRegno(e.target.value);
                      }}

                    />

                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Make</label>
                    <Form.Control type="text" className="form-control" defaultValue={val.make}
                      onChange={(e) => {
                        setMake(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Model</label>
                    <Form.Control type="text" id="exampleInputUsername1" defaultValue={val.model}

                      onChange={(e) => {
                        setModel(e.target.value);
                      }}

                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Vehicle Name</label>
                    <Form.Control type="text" className="form-control" defaultValue={val.name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Engin No.</label>
                    <Form.Control type="text" id="exampleInputUsername1" defaultValue={val.enginno}

                      onChange={(e) => {
                        setEnginno(e.target.value);
                      }}


                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Chasis No.</label>
                    <Form.Control type="text" className="form-control" defaultValue={val.chasisno}
                      onChange={(e) => {
                        setChasisno(e.target.value);
                      }}


                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Auto / Menual</label>
                    <Form.Control type="text" className="form-control" defaultValue={val.auto} onChange={(e) => {
                      setAuto(e.target.value);
                    }}
                    />
                  </Form.Group>

                  <button className="badge badge-warning"
                    onClick={() => {
                      vupdate(val.id);
                    }}
                  >
                    {" "}

                    Update
                  </button>

                  <Link
                    to="/Vmaster"
                    className="btn btn-dark">
                    Cancel              </Link>
                  {/* <button className="btn btn-dark">Cancel</button> */}

                </div>

              </>
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
