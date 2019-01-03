import React from "react";
//import CardBtn from "../CardBtn";
import "./style.css";
import ruidiaz from './images/Ruidiaz.jpeg';
import lodeiro from './images/Lodeiro.jpeg';
import svensson from './images/Svensson.jpeg';

function Card(props) {
  var image = "";
  // if (props.image_id === 1) {
  //   image = ruidiaz;
  // }
  console.log("props.image_id:");
  console.log(props.image_id);
  switch (props.image_id) {
    case 0:
      image = ruidiaz;
      break;
    case 1:
      image = lodeiro;
      break;
    case 2:
      image = svensson;
  }

  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `props.image` : "none"
      }}
    >
      {/* {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} */}
      <img src={image} width="90" height="70" onClick={props.handleBtnClick}></img>
    </div>
  );
}

export default Card;
