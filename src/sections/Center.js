import React from "react";
import Card from "../components/Card";
import "./css/center.css";

import Blockchain from "../images/blockchain_three.png";
import StudentCord from "../images/animated_student.png"
import Expense from "../images/expense2.png"

function Center() {
  const studentCord = "A server created for students as a space where they can engage in meaningful conversations with other peers."
  return (
    <div className="center-cointainer">
      <div className="left">
        <Card
          title="CryptoApp"
          description="A user friendly app that displays and organizes real time data on crypto currency data."
          imageSource={Blockchain}
          link={"https://crypt0-app.netlify.app/"}
        />
      </div>
      <div className="middle">
        <Card title="StudentCord" description={studentCord} imageSource={StudentCord} link={"/"} />
      </div>
      <div className="right">
        <Card title="ExpenseManager" description="A Java application that allows the user to catalog thier expenses by date and category."
          imageSource={Expense}
          link={"https://github.com/elewites/ExpenseManager"}
        ></Card>
      </div>
    </div>
  );
}

export default Center;
