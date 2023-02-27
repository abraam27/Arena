import React, { useState } from "react";
import style from "./registration.module.css";
import { Navigate, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Joi from "joi";


import Joi from "joi-browser";

export default function Registration({ loggedIn }) {
  let [user, setUser] = useState({
    fullName: "",
    userName: "",
    phone: "",
    birthDate: "",
    location: "",
    email: "",
    password: "",
  });
  // console.log(loggedIn);
  let [error, setError] = useState({});
  let [inputIsTouched, setInputIsTouched] = useState(false);
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
    // confirm_password: Joi.string().required().equal(Joi.ref('password')).min(6),
  };

  let validateForm = (e) => {
    e.preventDefault();
    let result = Joi.validate(user, schema, { abortEarly: false });
    // console.log(result);
    const { error } = result;
    if (!error) {
      // return null;
      formSubmit();
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

  const handleSave = (e) => {
    const { name, value } = e.target;
    let errorData = { ...error };
    const errorMessage = validateProperty(e);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let myUser = { ...user };
    myUser[name] = value;
    setUser(myUser);
    setError(errorData);
  };
  const onBlurHandler = (e) => {

    Object.keys(error).length === 0 ? setInputIsTouched(false) : setInputIsTouched(true)
    // console.log(Object.keys(error).length === 0)
  };

  const validateProperty = (e) => {
    const { name, value } = e.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    // if (error == null){
    //   setInputIsTouched(false)
    //   console.log("no error")
    // }
    // console.log(inputIsTouched)
    return error ? error.details[0].message : null;
  };

  async function formSubmit(e) {
    // console.log("Ana el zorar we shaghal");
    // console.log(user);
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

  return (
    <div id="reg" className={style.bodyReg}>

      <div className="w-50 mx-auto   ">
        <h1 className="texttik m-4 d-flex justify-content-center">Register</h1>
        {/* style={{border:"4px solid green "}} */}
        <form method="post" onSubmit={formSubmit} className="justify-content-center rounded">
          <div className="form-group  row mt-2 mb-4">
            <label htmlFor="full-name" className="col-sm-3 col-form-label fs-5">
              Full Name
            </label>
            <div className="col-sm-9 ">
              <input
                type="text"
                onChange={handleSave}
                onBlur={onBlurHandler}
                className="form-control"
                name="fullName"
                value={user.fullName}
                id="full-name"
                placeholder="Full Name"
              />
            </div>
            {error.fullName && inputIsTouched && (
              <div className="text-danger text-center   ">Dakhal full name sah ya waala</div>
              // {error.fullName}
            )}
          </div>

          <div className="form-group row  mb-4">
            <label htmlFor="userName" className="col-sm-3 col-form-label fs-5 ">
              username
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                onBlur={onBlurHandler}
                onChange={handleSave}
                className="form-control"
                name="userName"
                value={user.userName}
                id="userName"
                placeholder="Username"
              />
            </div>
            {error.userName && inputIsTouched && (
              <div className="text-danger text-center ">Dakhal user name sah ya waala</div>
            )}
          </div>


          <div className="form-group row   mb-4 ">
            <label htmlFor="birthDate" className="col-sm-3 col-form-label fs-5">
              Date of birth
            </label>
            <div className="col-sm-9">
              <input
                type="date"
                className="form-control"
                name="birthDate"
                onBlur={onBlurHandler}
                value={user.birthDate}
                id="birthDate"
                onChange={handleSave}
              />
            </div>
            {error.birthDate && inputIsTouched && (
              <div className="text-danger text-center ">Dakhal Birth Date sah ya waala</div>
            )}
          </div>

          <div className="form-group row mb-4">
            <label htmlFor="location" className="col-sm-3 col-form-label fs-5">
              Loaction
            </label>
            <div
              className="col-sm-9"
              value={user.location}
              onBlur={onBlurHandler}
              onChange={handleSave}>
              <select name="location" id="location" className=" form-control">
                <optgroup label="New Cairo">
                  <option value="first-set">First settlement</option>
                  <option value="fifth-set">Fifth settlement</option>
                </optgroup>
                <optgroup label="Nasr City">
                  <option value="makram">Makram Ebeed</option>
                  <option value="mostafa">Mostafa el Nahas</option>
                </optgroup>
              </select>
            </div>
            {error.location && inputIsTouched && (
              <div className="text-danger text-center ">Dakhal Location sah ya waala</div>
            )}
          </div>

          <div className="form-group row mb-4">
            <label htmlFor="phone" className="col-sm-3 col-form-label fs-5">
              Phone
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                onBlur={onBlurHandler}

                onChange={handleSave}
                className="form-control"
                name="phone"
                value={user.phone}
                id="phone"
                placeholder="Phone"
              />
            </div>
            {error.phone && inputIsTouched && (
              <div className="text-danger text-center ">Dakhal Phone sah ya waala</div>
            )}
          </div>

          <div className="form-group row mb-4 ">
            <label htmlFor="email" className="col-sm-3 col-form-label fs-5">
              Email
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                onBlur={onBlurHandler}
                onChange={handleSave}
                className="form-control"
                name="email"
                value={user.email}
                id="email"
                placeholder="Email"
              />
            </div>
            {error.email && inputIsTouched && (
              <div className="text-danger text-center ">Dakhal Email sah ya waala</div>
            )}
          </div>

          <div className="form-group row mb-4">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label fs-5">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                autoComplete="on"
                onBlur={onBlurHandler}
                onChange={handleSave}
                className="form-control"
                name="password"
                // value={user.password}
                id="inputPassword"
                placeholder="Password"
              />
            </div>
            {error.password && inputIsTouched && (
              <div className="text-danger text-center ">Dakhal Password sah ya waala</div>
            )}
          </div>
          {/* <div className="form-group row ml-2 mb-4">
            <label
              htmlFor="inputConfirmPassword"
              className="col-sm-3 col-form-label fs-5">
              Confirm Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                autoComplete="on"
                onBlur={onBlurHandler}
                onChange={handleSave}
                className="form-control"
                name="confirm_password"
                // value={user.confirm_password}
                id="inputConfirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          {error.confirm_password && inputIsTouched &&(
            <div className="text-danger text-center ">{error.confirm_password}</div>
            
          )}
          </div> */}


          <div className="m-4 d-flex justify-content-center ">

            <input type="submit" value="Register " className="btn btn-outline-success" onClick={validateForm} />
          </div>
        </form>
      </div>
    </div>
  );
}
