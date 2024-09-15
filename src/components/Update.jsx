import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(null);

  useEffect(()=>{
    setId(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setUsername(localStorage.getItem("Username"));
    setEmail(localStorage.getItem("Email"));
    setPhone(localStorage.getItem("Phone"));
    
  },[])

  const updateAPIData = async() =>{
    await axios.put(`https://66c9ac4f59f4350f064d1e89.mockapi.io/axios/${id}`, {
      name,
      username,
      email,
      phone
    })
    .then(()=>{
      console.log('Data updated successfully');
      navigate('/');
    })
    .catch((error) => console.error(error));
  };



  return (
   <div className="container">
     <div className="update-form">
     <div  className="row">
      <div className="d-flex justify-content-center ">
      <div class="col-12 col-lg-8 mt-5 mb-5 mb-lg-5">
           
           <div class="mx-auto form-BG rounded-4 shadow-lg">
                <div class="d-flex mb-6 mx-auto align-items-center justify-content-center bg-white border rounded-pill" >
                </div>
                <div className='container mt-4'>
      <div className='row'>
        <h2 className='text-center'> Edit Record</h2>
       
      <form>
        <div className="mx-4 mb-3 form-group">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mx-4 mb-3 form-group">
          <label htmlFor="InputUserName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="InputUserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mx-4 mb-3 form-group">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mx-4 mb-3 form-group">
          <label htmlFor="InputNumber" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="InputNumber"
            name="mobileNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="mx-4 mb-3  btn btn-primary"
          onClick={updateAPIData}
        >
          Update
        </button>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

    </div>
   </div>
  );
}

export default Update