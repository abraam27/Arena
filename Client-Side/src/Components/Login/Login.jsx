import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getLoginUser } from "../../Shared/shared";

import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
export default function Login(props) {
  let [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function getUser(e) {
    if (e.target.value.includes("@")) {
      setUser({ email: "", password: "" });
      let myUser = { ...user };
      myUser[e.target.name] = e.target.value;
      let userWithEmail = { email: myUser.userName, password: myUser.password };
      setUser(userWithEmail);
    } else {
      let myUser = { ...user };
      myUser[e.target.name] = e.target.value;
      setUser(myUser);
    }
  }

  async function formSubmit(e) {
    e.preventDefault();

    let { data, error, body } = await axios
      .post(`http://localhost:7500/api/login`, user)
      .catch((err) => {
        setShowError(true);
      });
    console.log(body);

    if (data.message === "Logged In Successfully") {
      localStorage.setItem("userToken", data.token);
      // getLoginUser()
      let encodedToken = localStorage.getItem("userToken"); //Get the localStorage item by key
      let userData = jwtDecode(encodedToken);
      dispatch({ type: "setLoggedInUser", payload: userData });
      /*When the user Logged in successfully call the function getLoginUser();
      To decode the token and save it in the useState*/
      navigate("/");
    } else {
      alert("User Not Found or password and Email is wrong");
    }
  }

  return (
    <>
      <div className="w-50 mx-auto ">
        <h1 className="texttik m-4 d-flex justify-content-center">Login</h1>

        <form onSubmit={formSubmit}>
          <input
            placeholder="Email / Username"
            onChange={getUser}
            type="text"
            name="userName"
            className="text-center form-control m-2"
          />
          <input
            placeholder="Password"
            onChange={getUser}
            type="password"
            name="password"
            className="text-center form-control m-2"
          />
          {showError &&<div className="text-center text-danger pt-3">
            <b>Wrong email/username or password, please try again!</b>
          </div>}
          <div className="d-flex justify-content-center m-5">
            <button className="btn btn-outline-success col-lg-3 col-6">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
