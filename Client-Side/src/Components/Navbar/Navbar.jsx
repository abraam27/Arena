import React, { useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import style from "./navbar.module.css";
import logo from "../../images/Logo.png";
// import shared from "../../Shared/shared";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Shared/shared";

export default function Navbar({ loggedInUser, logOut }) {
  // console.log(getData());
  // console.log(loggedInUser)
 const dispatch= useDispatch()

  // const myReduxData = useSelector((state) => state);
  // console.log(myReduxData);
  return (
    <div>
      <nav className={style.navBar}>
        <ul className="list-unstyled d-flex">
          
            {/* <NavLink to="/">Logo</NavLink> */}
            <img src={logo} alt="" className={style.logo} />
          

          <li className="px-2 ">
            <NavLink to="/home">Home</NavLink>
          </li>
          {loggedInUser ? (
            <>
              <li className="px-2">
                <NavLink to="/owner-profile">Profile</NavLink>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>

        <ul className="list-unstyled d-flex ">
          {loggedInUser ? (
            <>
              <li className="px-2">
                <NavLink
                  onClick={() => {
                    localStorage.removeItem("userToken"); //Remove the token from Local Storage
                    dispatch({ type: "setLoggedInUser", payload: null });
                  }}
                  to="/login"
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <div className="btn-group  ">
                <button type="button" className="btn btn-success dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                  Register
                  
                </button>
                <ul className="dropdown-menu ">
                  <li className="dropdown-item px-2 btn btn-outline-success">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li className="dropdown-item px-2 btn btn-outline-success">
                    <NavLink to="/owner-register">Register as owner</NavLink>
                  </li>
                </ul>
              </div> 
               {/* <li className="px-2">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="px-2">
                <NavLink to="/owner-register">Register as owner</NavLink>
              </li> */}
              <li className="px-2">
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
    ///////////////////////////
  );

}

