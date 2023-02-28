import React, { useState } from "react";
import FieldForm from "./FieldForm";
import "./OwnerProfile.css";
const OwnerProfile = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  function addField() {
    setFormIsVisible(true);
  }
  return (
    <>
      {!formIsVisible && (
        <div className="row justify-content-between">
          <div className="col-3 bg-success">
            <h1>image</h1>
          </div>
          <div className="col-2 bg-light ">
            <button
              type="button"
              onClick={addField}
              data-toggle="toggle"
              className="btn btn-success">
              Add Field
            </button>
          </div>
        </div>
      )}
      {formIsVisible && (
        <FieldForm setFormIsVisible={setFormIsVisible}></FieldForm>
      )}
    </>
  );
};

export default OwnerProfile;
