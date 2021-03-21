import React from 'react';
import "./InfoBar.css";
import closeIcon from '../../Icons/closeIcon.png'
import onlineIcon from '../../Icons/onlineIcon.png';



const InfoBar = ({room}) => {
  return (
    <div className="infoBar">
    <div className="leftInnerContainer">
      <img alt="online" src={onlineIcon}/>
      <h3> Room: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close"/>
      </a>
      </div>
    </div>
  )

}
export default InfoBar;