import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login({ loggedIn }) {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  console.log("sdasd")
  // console.log(loggedIn)

  async function formSubmit(e) {
    e.preventDefault();
    // let res = await fetch("http://localhost:7500/api/login", {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log(res);

    let {data} = await axios.post(`http://localhost:7500/api/login` , user)
    console.log(data);

    if(data.message === "Logged In successfully"){
      console.log(data);
      localStorage.setItem("userToken" , data.token)
      navigate("/")
      loggedIn.setIsLoggedIn(true)
    }else{
      alert("User Not Found or password and Email is wrong")
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
            type="email"
            name="email"
            className="text-center form-control m-2"
          />
          <input
            placeholder="Password"
            onChange={getUser}
            type="password"
            name="password"
            className="text-center form-control m-2"
          />
          <div className="d-flex justify-content-center m-5">
            <button className='btn btn-outline-success col-lg-3 col-6'>LogIn</button>
          </div>
        </form>
      </div>
    </>
  );
}
