import React from 'react';
import selfie from '../noah.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../App.css';

const Message = () => {
  return (
    <>
      <div className="header">
        <h1 style={{ color: "red" }}>N</h1>
        <h1 style={{ color: "darkorange" }}>o</h1>
        <h1 style={{ color: "rgba(7, 143, 219, 1)" }}>a</h1>
        <h1 style={{ color: "rgba(145, 9, 252, 1)" }}>h</h1>
        <h1 style={{ color: "deeppink" }}>!</h1>
        <h1>You are the best.&#128513;</h1>
        <FavoriteIcon style={{ fill: 'red', fontSize: '4em' }} />
        <FavoriteIcon style={{ color: 'deeppink', fontSize: '2em' }} />
        <FavoriteIcon style={{ color: 'orange' }} />
        <img src={selfie} alt="noah's selfie" className="baby-img" />
      </div>
      <h3 className="instruction">Just click on any of the buttons on the top to choose what you want to practise, Good Luck	&#128540;!</h3>
    </>
  )
}

export default Message
