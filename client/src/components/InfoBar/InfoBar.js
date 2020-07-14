import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="info-bar">
    <div className="left-inner-container">
      <img className="online-icon" src={onlineIcon} alt="online" />
      <h3>{room}</h3>
    </div>
    <div className="right-inner-container">
      <a href="/"><img src={closeIcon} alt="close" /></a>
    </div>
  </div>
);

export default InfoBar;
