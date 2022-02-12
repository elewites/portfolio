import React from "react";
import "./css/card.css";

function Card(props) {
  return (
    <div className="card-container">
      <a className="title" href={props.link} target="_blank" className="title">
        {props.title}
      </a>
      <img alt="source-0" src={props.imageSource}></img>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default Card;
