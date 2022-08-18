import React from "react";
import "./css/banner.css";
import logo from "../images/eros_white.png";

function Banner() {
  const x = "<p>";
  const y = "</p>";
  return (
    <div className="banner-cointainer">
      <div className="text">
        <p className="check">I'm passionate about computers, biology, and education.</p>
        <p className="check"> Currently I'm looking to strengthen my industry experience as a full-stack developer.</p>
        <p className="check">
          Below you can check out what I've been up to...{" "}
        </p>
        {/*<p className="pointer">click over me for a sur}prise ---></p>*/}
      </div>
    </div>
  );
}

export default Banner;
