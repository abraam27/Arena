import React from "react";
import Joi from "joi-browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
const RegistrationValidation = ({ loggedIn }) => {
  let [user, setUser] = useState({
    fullName: "",
    userName: "",
    phone: "",
    birthDate: "",
    location: "",
    email: "",
    password: "",
  });
  let [error, setError] = useState({});

  const navigate = useNavigate();
  let schema = {
    fullName: Joi.string().min(3).max(15).required(),
    userName: Joi.string().min(5).max(15).required(),
    phone: Joi.string()
      .regex(/^01[0-2,5]{1}[0-9]{8}$/)
      .required(),
    birthDate: Joi.date().min("2018-01-01").required(),
    location: Joi.required(),
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net", "org"] } })
      .required(),
    password: Joi.string().min(6).required(),
  };
   async function formSubmit(e) {
     await fetch("http://localhost:7500/api/players/add", {
       method: "POST",
       body: JSON.stringify(user),
       headers: {
         "Content-Type": "application/json",
       },
     });
     loggedIn.setIsLoggedIn(true);
     navigate("/");
   }
    
  let validateForm = (e) => {
    e.preventDefault();
    let result = Joi.validate(user, schema, { abortEarly: false });
    
    const { error } = result;
    if (!error) {
      
   formSubmit()
    } else {
      const errorData = {};
      for (let users of error.details) {
        const name = users.path[0];
        const message = users.message;
        errorData[name] = message;
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
      loggedIn={loggedIn}
      user={user}
          setUser={setUser}
          formSubmit={formSubmit}
    />
  );
};

export default RegistrationValidation;
