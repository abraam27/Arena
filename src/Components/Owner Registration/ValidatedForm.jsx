import React from "react";
import Joi from "joi-browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import axios from "axios";
const RegistrationValidation = () => {
  let [user, setUser] = useState({
    fullName: "",
    userName: "",
    phone: "",

    email: "",
    password: "",
    // role: "fieldOwner",
  });
  let [error, setError] = useState({});
  let [fieldIsEmpty, setFieldIsEmpty] = useState(false);
  const navigate = useNavigate();
  let schema = {
    fullName: Joi.string().min(3).max(20).required(),
    userName: Joi.string().min(5).max(15).required(),
    phone: Joi.string()
      .regex(/^01[0-2,5]{1}[0-9]{8}$/)
      .required(),

    email: Joi.string()
      .email({ tlds: { allow: ["com", "net", "org", "eg"] } })
      .required(),
    password: Joi.string().min(6).required(),
  };
  async function formSubmit(e) {
    await axios.post(`http://localhost:7500/api/fieldOwners/add`, user);
    console.log(user);
    // loggedIn.setIsLoggedIn(true);
    navigate("/login");
  }

  let validateForm = (e) => {
    e.preventDefault();
    let result = Joi.validate(user, schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      formSubmit();
    } else {
      setFieldIsEmpty(true);
      const errorData = {};
      for (let users of error.details) {
        const name = users.path[0];
        const message = users.message;
        errorData[name] = message;
        // console.log(errorData)
      }

      setError(errorData);
      // console.log(error);
      return errorData;
    }
  };
  const validateProperty = (e) => {
    const { name, value } = e.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;

    return error ? error.details[0].message : null;
  };
  return (
    <RegistrationForm
      error={error}
      validateProperty={validateProperty}
      validateForm={validateForm}
      setError={setError}
      // loggedIn={loggedIn}
      user={user}
      setUser={setUser}
      formSubmit={formSubmit}
      fieldIsEmpty={fieldIsEmpty}
    />
  );
};

export default RegistrationValidation;
