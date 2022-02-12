import React from "react";
import Card from "../components/Card";
import "./css/center.css";

import Blockchain from "../images/blockchain_three.png";

function Center() {
  return (
    <div className="center-cointainer">
      <div className="left">
        <Card
          title="CryptoApp"
          description="A user friendly app that displays and organizes crypto currency real time data."
          imageSource={Blockchain}
          link={"https://crypt0-app.netlify.app/"}
        />
      </div>
      <div className="middle"></div>
      <div className="right">
        <p className="click">Click on me for a surprise</p>
      </div>
    </div>
  );
}

export default Center;
