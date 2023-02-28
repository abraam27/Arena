import React from "react";
import image from "../../images/player.svg";
import style from './landing.module.css'
export default function Landing({ loggedInUser }) {
    return (
        <div className="container myBody">
            <div className="row">
                <div className=" col-lg-6  text-center">
                    {loggedInUser ? <>                    <h2 className="mt-5">Welcome <span className={style.user_name_span}>{loggedInUser.userName}</span>  To <em> Arena ... </em></h2><br /><br /><br /></> : ''}

                    <h3 className="details">This platform aims to ease the reservation of soccer courts</h3>
                    <div className="btn btn-success m-5">Discover Courts</div>
                </div>
                <div className=" col-lg-6 d-lg-block  d-none">
                    <img src={image} alt="" className="m-5 w-100" />
                </div>
            </div>
        </div>
    );
}
