import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Divide = () => {
  let [firstNumber, setFirstNumber] = useState(0);
  let [secondNumber, setSecondNumber] = useState(0)
  //let firstNumber=Math.floor(Math.random() *20) + 1;
  // let secondNumber=Math.floor(Math.random() * 10) + 1;
  let [answer, setAnswer] = useState();
  let [message, setMessage] = useState('');
  let [url, setUrl] = useState('');
  let [results, setResults] = useState([]);
  
  useEffect(
    () => {
        let n = Math.floor(Math.random() * 9) + 1;
        setFirstNumber(Math.pow(n,2));
        setSecondNumber(n);
        console.log(firstNumber)
        console.log(secondNumber)
      }, []
  )
  const handleChange = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstNumber>=secondNumber && answer == firstNumber / secondNumber) {
      setMessage('Great Work, My dearest Noah');
      setUrl('http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg')
      setResults([...results, { answer }])
      console.log(results)
      setAnswer('');
      setFirstNumber(Math.floor(Math.random() * 20) + 1);
      setSecondNumber(Math.floor(Math.random() * 10) + 1)
    }
    else {
      setMessage('Please try again my dear, you can do it')
      setAnswer('')
    }

  }
  return (
    <div >
      <form onSubmit={handleSubmit} className="form-wrapper">
        <button className="divide-first">{firstNumber}</button>
        <span>/</span>
        <button className="divide-second">{secondNumber}</button>
        <span>=</span>
        <input type="text" value={answer} name="totalInput" onChange={handleChange} className="divide-answer" />
      </form>
      <h2>You got <span style={{ color: 'green' }}>{results.length}</span> right! </h2>
    </div>
  )
}

export default Divide;
