import React from 'react'
import logo from '../../images/logo.png';
import './AnimateBG.css';

const AnimateBG = () => {
  return (
    <div className="animate-wrapper">
      <img className="leaf leaf-1" src={logo} alt="" />
      <img className="leaf leaf-2" src={logo} alt="" />
      <img className="leaf leaf-3" src={logo} alt="" />
      <img className="leaf leaf-4" src={logo} alt="" />
      <img className="leaf leaf-5" src={logo} alt="" />
    </div>
  )
}

export default AnimateBG
