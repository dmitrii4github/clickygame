import React from "react";
//import CardBtn from "../CardBtn";
import "./style.css";
import ruidiaz from './images/Ruidiaz.jpeg';
import lodeiro from './images/Lodeiro.jpeg';
import svensson from './images/Svensson.jpeg';
import aroldan from './images/ARoldan.jpeg';
import bruin from './images/Bruin.jpeg';
import bwana from './images/Bwana.jpeg';
import francis from './images/Francis.jpeg';
import keehee from './images/Kee-Hee.jpeg';
import leerdam from './images/Leerdam.jpeg';
import marshall from './images/Marshall.jpeg';
import mccrary from './images/McCrary.jpeg';
import neagle from './images/Neagle.jpeg';
import nouhou from './images/Nouhou.jpeg';
import rodriguez from './images/Rodriguez.jpeg';
import roldan from './images/Roldan.jpeg';
import shipp from './images/Shipp.jpeg';
import smith from './images/Smith.jpeg';
import torres from './images/Torres.jpeg';

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
      break;
    case 3:
      image = aroldan;
      break;
    case 4:
      image = bruin;
      break;
    case 5:
      image = bwana;
      break;
    case 6:
      image = francis;
      break;
    case 7:
      image = keehee;
      break;
    case 8:
      image = leerdam;
      break;
    case 9:
      image = marshall;
      break;
    case 10:
      image = mccrary;
      break;
    case 11:
      image = neagle;
      break;
    case 12:
      image = nouhou;
      break;
    case 13:
      image = rodriguez;
      break;
    case 14:
      image = roldan;
      break;
    case 15:
      image = shipp;
      break;
    case 16:
      image = smith;
      break;
    case 17:
      image = torres;
      break;
    default:
      image = lodeiro;
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
