import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Read() {
    const [APIdata, setAPIData] = useState([]);

    useEffect(()=>{
      getData();
    },[])

    const setData = (data) => {
      let { id, name, username, email, phone } = data;
      localStorage.setItem("ID", id);
      localStorage.setItem("Name", name);
      localStorage.setItem("Username", username);
      localStorage.setItem("Email", email);
      localStorage.setItem("Phone", phone);
    };

    const onDelete = async (id) => {
     await  axios
        .delete(`https://66c9ac4f59f4350f064d1e89.mockapi.io/axios/${id}`)
        .then(() => {
          getData();
        });
    };
    
    const getData = async () => {
      await axios
      .get(`https://66c9ac4f59f4350f064d1e89.mockapi.io/axios`)
      .then((response)=>{
        setAPIData(response.data);
      });
    };


  return (
    <div className='container'>
      <div className='create-btn text-center my-4'>
        <Link to='/create'>
          <button className='btn btn-primary'>Create New Record</button>
        </Link>
      </div>

     <div className='table-responsive mb-5'>
     <table className='table table-striped table-bordered '>
        <thead>
          <tr>
          <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIdata.map((data)=>{
            return(
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <Link to='/update'>
                    <button 
                    type='button'
                    className='btn btn-primary'
                     onClick={()=>setData(data)}
                     >
                      Update</button>
                  </Link>
                </td>
                <td>
                  <button 
                  type='button'
                  className='btn btn-danger' 
                  onClick={()=>onDelete(data.id)}
                   
                  >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default Read