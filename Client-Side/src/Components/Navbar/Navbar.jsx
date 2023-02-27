import { func } from "joi";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

export default function Navbar({ loggedIn }) {
  // console.log(loggedIn.isLoggedIn);

  return (
    <div >
      <nav className={style.navBar}>
        <ul className="list-unstyled d-flex">
          <li className="px-2">
            <NavLink to="/">Logo</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/home">Home</NavLink>
          </li>
        </ul>

        <ul className="list-unstyled d-flex ">
          <li className="px-2">
            {!loggedIn.isLoggedIn && <NavLink to="/register">Register</NavLink>}
            {loggedIn.isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
          </li>
          <li className="px-2">
            {!loggedIn.isLoggedIn && <NavLink to="/login">Login</NavLink>}
            {loggedIn.isLoggedIn && (
              <NavLink
                onClick={() => {
                  loggedIn.setIsLoggedIn(false);
                }}
                to="/">
                Logout
              </NavLink>
            )}
          </li>
          {/* <li className='px-2'><NavLink to='/logout'>Logout</NavLink></li> */}
        </ul>
      </nav>
    </div>
  );
}
