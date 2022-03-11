import React from 'react';
import selfie from '../noah.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../App.css';

const Message = () => {
  return (
      <div className="header">
        <h1 style={{ color: "red" }}>N</h1>
        <h1 style={{ color: "darkorange" }}>o</h1>
        <h1 style={{ color: "blue" }}>a</h1>
        <h1 style={{ color: "green" }}>h</h1>
        <h1 style={{ color: "deeppink" }}>!</h1><h1>Du är bäst</h1>
        <FavoriteIcon className="hearticon-first" style={{ fill: 'red' }} />
        <FavoriteIcon className="hearticon-second" style={{ color: 'deeppink' }} />
        <FavoriteIcon className="hearticon-third" style={{ color: 'orange' }} />
        <img src={selfie} alt="noah's selfie" className="baby-img" />
      </div>
  )
}

export default Message
