import Joi from "joi-browser";
import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import  axios from 'axios';


const FieldForm = ({ setFormIsVisible }) => {
  //TODO need to send the fieldOwner ID
  let OwnerToken = localStorage.getItem("userToken");
  let ownerData = jwtDecode(OwnerToken);
  console.log(ownerData.userID );
  
  let [field, setField] = useState({
    fieldName: "",
    location: "newCairo",
    price: 0,
    valid: 0,
    fieldOwnerId:""
  });
  
  const [showError, setShowError] = useState(false);
  let fieldSchema = {
    fieldName: Joi.string().required(),
    location: Joi.string().required(),
    price: Joi.required(),
    valid: Joi.required(),
    fieldOwnerId:Joi.string().required()
  };

  async function formSubmit(e) {
    e.preventDefault();

    let result = Joi.validate(field, fieldSchema, { abortEarly: false });
    // console.log(result.error);
    if (result.error == null) {
      //TODO check url
      // await axios.post(`http://localhost:7500/api/`, field);
      await axios.post(`http://localhost:7500/api/fields/add` , field);
      console.log(field);
      alert("Added succussfully")
      setFormIsVisible(false);
    } else setShowError(true);
  }

  function formInputHandler(e) {
    const { name, value } = e.target;

    let myField = { ...field };
    myField[name] = value;
    myField.fieldOwnerId=ownerData.userID
    setField(myField);
    
  }

  return (
    <div>
      <div className="w-100  mx-auto  p-3">
        <h1 className="texttik m-4 d-flex justify-content-center ">
          Field Details
        </h1>

        <form method="post" onSubmit={formSubmit}>
          <div className="form-group row">
            <label htmlFor="fieldName" className="col-sm-2 col-form-label">
              Field Name
            </label>

            <div className="col-sm-10">
              <input
                type="text"
                onChange={formInputHandler}
                className="form-control"
                name="fieldName"
                id="fieldName"
                placeholder="Field Name"
              />
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="location" className="col-sm-2 col-form-label">
              location
            </label>
            <div className="col-sm-10" value={field.location}>
              <select
                name="location"
                id="location"
                className=" form-control"
                onChange={formInputHandler}>
                <option value="newCairo">New Cairo</option>
                <option value="nasrCity">Nasr City</option>
              </select>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              price
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                name="price"
                id="price"
                onChange={formInputHandler}
              />
            </div>
          </div>
          <div className="text-center m-3">
            {showError && (
              <div className="text-center text-danger pb-3">
                Please enter all fields!
              </div>
            )}
            <input
              className="btn btn-outline-success"
              type="submit"
              value="Add Field "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FieldForm;
