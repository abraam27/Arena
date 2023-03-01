import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";
import logo from "../../images/Logo1.jpg";
export default function Navbar({ loggedInUser , logOut}) {
  return (
    <div >
      <nav className={style.navBar}>
        <ul className="list-unstyled d-flex">
          <li className="px-2">
            <NavLink to="/">Logo</NavLink>
            {/* <img src={logo} alt="" className={style.logo} /> */}
          </li>
          <li className="px-2">
            <NavLink to="/home">Home</NavLink>
          </li>
          {
            loggedInUser ? <>

              <li className="px-2">
                <NavLink to="/owner-profile">Profile</NavLink>
              </li>
            </>
              : ''
          }
        </ul>

        <ul className="list-unstyled d-flex ">

          {
            loggedInUser ? <><li className="px-2">
              <NavLink onClick={logOut} to="/login">Logout</NavLink>
            </li></> : <>
              <li className="px-2">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="px-2">
                <NavLink to="/login">Login</NavLink>

              </li>
            </>
          }

        </ul>
      </nav>
    </div>
  );
}
