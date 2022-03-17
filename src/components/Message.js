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
        <h1 style={{ color: "deeppink" }}>!</h1>
      <h1>You are the best.</h1>
      <h1>Just click on the button on the top to practice what you want to learn</h1>
        <FavoriteIcon style={{ fill: 'red', fontSize: '4em' }} />
        <FavoriteIcon style={{ color: 'deeppink', fontSize: '2em' }} />
        <FavoriteIcon style={{ color: 'orange' }} />
        <img src={selfie} alt="noah's selfie" className="baby-img" />
      </div>
  )
}

export default Message
