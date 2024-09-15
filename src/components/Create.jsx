import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((preData) => ({
            ...preData,
            [name]: value,
        }))
    }
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post(
            `https://66c9ac4f59f4350f064d1e89.mockapi.io/axios`,
            editData
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        navigate("/");
      };
    return (
      <div className="container">
       
      <div  className="row">
      <div className="d-flex justify-content-center ">
      <div class="col-12 col-lg-8 mt-5 mb-5 mb-lg-5">
           
           <div class="mx-auto form-BG rounded-4 shadow-lg">
                <div class="d-flex mb-6 mx-auto align-items-center justify-content-center bg-white border rounded-pill" >
                </div>
                <div className='container mt-4'>
      <div className='row'>
        <h2 className='text-center'> Create New Record</h2>
       <form
          onSubmit={handleFormSubmit}
          class="row g-3 needs-validation"
          novalidate
        >
          <div className="col-lg-12 mt-3">
            <div className="row">
          <div class="mx-4 col-md-8 position-relative">
            <label for="validationTooltip01" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="validationTooltip01"
              value={editData.name}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="row">
          <div class="mx-4 col-md-8 position-relative">
            <label for="validationTooltip01" class="form-label">
              User Name
            </label>
            <input
              type="text"
              name="username"
              class="form-control"
              id="validationTooltip01"
              value={editData.username}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="row">
          <div class=" mx-4 col-md-8 position-relative">
            <label for="validationTooltip01" class="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              class="form-control"
              id="validationTooltip01"
              value={editData.email}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          </div>
          </div>
          <div class=" mx-4 col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              class="form-control"
              id="validationTooltip01"
              value={editData.phone}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>

          <div class=" mx-4 col-12">
            <button class="btn btn-primary mb-4" type="submit">
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
        
       </div>
       </div>
        
       </div>
      </div>
      </div>
    );
};

export default Create;