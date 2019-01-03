import React from "react";
//import CardBtn from "../CardBtn";
import "./style.css";
import ruidiaz from './images/Ruidiaz.jpeg';

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `props.image` : "none"
      }}
    >
      {/* {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} */}
      <img src={ruidiaz} width="90" height="70"></img>
    </div>
  );
}

export default Card;
