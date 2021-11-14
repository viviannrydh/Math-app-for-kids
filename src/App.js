import React, { useState, useEffect } from 'react'
import './App.css';

import Header from './components/Header';
import Plus from './pages/Plus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Message from './components/Message';
import Minus from './pages/Minus';
import { PlusOneRounded } from '@material-ui/icons';
import Multiple from './pages/Multiple';
import Divide from './pages/Divide';
import Help from './pages/Help';
import Results from './pages/Results';

const App = () => {
  return (
    <>
        {/*<p className="message">{message}</p>*/}
      <Router>
          <Header />
          <div className="content-wrapper">
            <Message />
              <Routes>
                <Route path="/" exact element={<Plus />} />
                <Route path="/minus" element={<Minus />} />
                <Route path="/multiple" element={<Multiple />} />
                <Route path="/Divide" element={<Divide />} />
                <Route path="/help" element={<Help />} />
                <Route path="/results" element={<Results />} />
            </Routes>
          </div>
      </Router>

    </>
  )
}

export default App;

