import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Multiple = () => {
  let [firstNumber, setFirstNumber] = useState(0);
  let [secondNumber, setSecondNumber] = useState(0)
  //let firstNumber=Math.floor(Math.random() *20) + 1;
  // let secondNumber=Math.floor(Math.random() * 10) + 1;
  let [answer, setAnswer] = useState();
  let [message, setMessage] = useState('');
  let [url, setUrl] = useState('');
  let [results, setResults] = useState([]);
  let counter = 0;
  useEffect(
    () => {
      setFirstNumber(Math.floor(Math.random() * 9) + 1);
      setSecondNumber(Math.floor(Math.random() * 9) + 1)
    }, []
  )
  const handleChange = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer == firstNumber * secondNumber) {
      setMessage('Great Work, My dearest Noah');
      setUrl('http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg')
      setResults([...results, { answer }])
      counter+=1;
      console.log(results)
      console.log(results.length+1)
      setAnswer('');
      setFirstNumber(Math.floor(Math.random() * 9) + 1);
      setSecondNumber(Math.floor(Math.random() * 9) + 1);
    }
    else {
      setMessage('Please try again my dear, you can do it')
      setAnswer('')
    }

  }
  return (
    <div className="multiple-wrapper">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <button className="multiple-first">{firstNumber}</button>
        <span>*</span>
        <button className="multiple-second">{secondNumber}</button>
        <span>=</span>
        <input type="text" value={answer} className="multiple-answer" name="totalInput" onChange={handleChange} />
      </form>
      <h2>You got <span style={{color:'green'}}>{results.length}</span> right! </h2>
    </div>
  )
}

export default Multiple
