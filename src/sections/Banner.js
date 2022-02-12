import React from "react";
import "./css/banner.css";
import logo from "../images/eros_white.png";

function Banner() {
  const x = "<p>";
  const y = "</p>";
  return (
    <div className="banner-cointainer">
      <div className="text">
        <p className="hello">Hello World</p>
        <p className="name">I'm Eros.</p>
        <p className="check">
          Below you can check out what I've been up to...{" "}
        </p>
        {/*<p className="pointer">click over me for a sur}prise ---></p>*/}
      </div>
      <img src={logo} alt="profile_pic" />
    </div>
  );
}

export default Banner;
