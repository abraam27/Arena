import React from "react";
import image from "../../images/player.svg";
import style from './landing.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
export default function Landing() {
    const loggedInUser = useSelector((state) => state);
    return (

        <div className="container myBody" >

            <div className="row">
                <div className=" col-lg-6 " >
                    {loggedInUser ? <>  <h2 className="mt-5">Welcome <span className={style.user_name_span}>{loggedInUser.userName}</span>  To <em> Arena ... </em></h2><br /><br /><br /></> :
                        <h1 className="mt-5">Welcome  To <em> Arena ... </em></h1>
                    }

                    <h4 className="details ">This platform aims to ease the reservation of soccer courts</h4>
                    <div>
                        <NavLink
                            className="btn btn-success m-5 rounded-pill"
                            role="button"
                            to="/discover"
                        >
                            Discover Courts
                        </NavLink>
                    </div>
                </div>
                <div className=" col-lg-6 d-lg-block  d-none">
                    <img src={image} alt="" className="m-5 w-100" />
                </div>
            </div>
        </div>
    );
}
