import Joi from "joi-browser";
import React, { useState } from "react";

const FieldForm = ({ setFormIsVisible }) => {
  //TODO need to send the fieldOwner ID
  let [field, setField] = useState({
    fieldName: "",
    area: "",
    price: 0,
    valid: 0,
  });
  const [showError, setShowError] = useState(false);
  let fieldSchema = {
    fieldName: Joi.string().required(),
    area: Joi.string().required(),
    price: Joi.required(),
    valid: Joi.required(),
  };

  async function formSubmit(e) {
    e.preventDefault();

    let result = Joi.validate(field, fieldSchema, { abortEarly: false });
    console.log(result.error);
    if (result.error == null) {
      //TODO check url
      // await axios.post(`http://localhost:7500/api/`, field);
      console.log(field);
      setFormIsVisible(false);
    } else setShowError(true);
  }

  function formInputHandler(e) {
    const { name, value } = e.target;

    let myField = { ...field };
    myField[name] = value;
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
            <label htmlFor="area" className="col-sm-2 col-form-label">
              Area
            </label>
            <div className="col-sm-10" value={field.area}>
              <select
                name="area"
                id="area"
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
