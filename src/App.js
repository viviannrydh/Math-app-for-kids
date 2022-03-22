import React, { useState, useEffect } from 'react'
import './App.css';

import Header from './components/Header';
import Plus from './pages/Plus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FrontPage from './pages/FrontPage';
import Minus from './pages/Minus';
import AnimateBG from './components/animateBG/AnimateBG.js';
import { PlusOneRounded } from '@material-ui/icons';
import Multiple from './pages/Multiple';
import Divide from './pages/Divide';
import Help from './pages/Help';

const App = () => {
  return (
    <>
        {/*<p className="message">{message}</p>*/}
      <Router>
          
        <Header />
        <AnimateBG />
          <div className="content-wrapper">
          <Routes>
                <Route path="/" exact element={<FrontPage />} />
                <Route path="/plus" exact element={<Plus />} />
                <Route path="/minus" element={<Minus />} />
                <Route path="/multiple" element={<Multiple />} />
                <Route path="/Divide" element={<Divide />} />
                <Route path="/help" element={<Help />} />
            </Routes>
          </div>
      </Router>

    </>
  )
}

export default App;

