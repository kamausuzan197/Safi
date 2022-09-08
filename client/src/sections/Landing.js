import React from "react";
import Button from "../components/Button";
import "./Landing.css";
import Features from "./Features";

function Landing() {
  const handleUpdateButtonClick = () => {
    //redirect to the login page
    window.location.href = "/review";
  }
  return (
    <div className="landing">
      <div className="ld_left">
        <h1>
          Having trouble with
          <br /> laundry place?
        </h1>
        <p>
          Welcome to Safi, This is a website that allows you to place an
          <br />
          order and get your clothers cleaned, and delivered to your home.
        </p>
        <div className="ld_button">
          <Button
              onClick={handleUpdateButtonClick}
            name="Update Order"
            bgColor="blue"
            color="white"
            padding="8px"
            radius="10px"
            fontSize="26px"
          />
          <Button
            name="Delete Order"
            bgColor="white"
            color="black"
            padding="8px"
            radius="10px"
            fontSize="26px"
          />
        </div>
      </div>
      <div className="ld_right">
        <img
          className="landingimg"
          src="https://previews.123rf.com/images/dit26978/dit269781803/dit26978180300029/98385071-3d-rendering-washing-machine-in-vintage-laundry-room.jpg"
          alt="laundry"
        />
      </div>
    </div>

  );
}

export default Landing;
