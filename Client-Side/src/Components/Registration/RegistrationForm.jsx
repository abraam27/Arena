import React from "react";
import "./ValidatedForm";
import { useState } from "react";
import style from "./registration.module.css";

const RegistrationForm = ({
  error,
  validateProperty,
  validateForm,
  setError,
  user,
  setUser,
  formSubmit,
}) => {
  let [inputIsTouched, setInputIsTouched] = useState(false);

  const onBlurHandler = (e) => {
    Object.keys(error).length === 0
      ? setInputIsTouched(false)
      : setInputIsTouched(true);
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

  return (
    <div id="reg" className={style.bodyReg}>
      <div className="w-50 mx-auto   ">
        <h1 className="texttik m-4 d-flex justify-content-center">Register</h1>

        <form
          method="post"
          onSubmit={formSubmit}
          className="justify-content-center rounded">
          <div className="form-group  row mt-2 mb-4">
            <label htmlFor="role" className="col-sm-3 col-form-label fs-5">
              Role
            </label>
            <div
              className="col-sm-9"
              value={user.location}
              onBlur={onBlurHandler}
              onChange={handleSave}>
              <select name="role" id="role" className=" form-control">
                <option value="player">Player</option>
                <option value="fieldOwner">Field Owner</option>
              </select>
            </div>
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
              <div className="text-danger text-center   ">{error.fullName}</div>
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
              <div className="text-danger text-center ">{error.userName}</div>
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
              <div className="text-danger text-center ">{error.birthDate}</div>
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
                  <option value="first">First Settlement</option>
                  <option value="fifth">Fifth Settlement</option>
                </optgroup>
                <optgroup label="Nasr City">
                  <option value="makram">Makram Ebeed</option>
                  <option value="mostafa">Mostafa el Nahas</option>
                </optgroup>
              </select>
            </div>
            {error.location && inputIsTouched && (
              <div className="text-danger text-center ">{error.location}</div>
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
              <div className="text-danger text-center ">
                Dakhal Phone sah ya waala
              </div>
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
              <div className="text-danger text-center ">{error.email}</div>
            )}
          </div>

          <div className="form-group row mb-4">
            <label
              htmlFor="inputPassword"
              className="col-sm-3 col-form-label fs-5">
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
                id="inputPassword"
                placeholder="Password"
              />
            </div>
            {error.password && inputIsTouched && (
              <div className="text-danger text-center ">{error.password}</div>
            )}
          </div>

          <div className="m-4 d-flex justify-content-center ">
            <input
              type="submit"
              value="Register "
              className="btn btn-outline-success"
              onClick={validateForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
