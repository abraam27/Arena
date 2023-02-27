import React from "react";
import image from "../../images/player.svg";

export default function Landing({loggedInUser}) {
    return (
        <div className="container myBody">
            <div className="row">
                <div className=" col-lg-6  text-center">
                    <h1 className="mt-5">Welcome To <em> Arena ... </em></h1><br /><br /><br />
                    <h2 className="details">This platform aims to ease the reservation of soccer courts</h2>
                    <div className="btn btn-success m-5">Discover Courts</div>
                </div>
                <div className=" col-lg-6 d-lg-block  d-none">
                    <img src={image} alt="" className="m-5 w-100" />
                </div>
            </div>
        </div>
    );
}
