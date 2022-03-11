import React, { useState, useEffect} from 'react'

const Plus = () => {
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
      setFirstNumber(Math.floor(Math.random() * 20) + 1);
      setSecondNumber(Math.floor(Math.random() * 10) + 1)
    }, []
  )
  const handleChange = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer == firstNumber + secondNumber) {
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
    <div>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <button className="plus-first">{firstNumber}</button>
        <span className="formula">+</span>
        <button className="plus-second">{secondNumber}</button>
        <span className="formula">=</span>
        <input type="text" value={answer} name="totalInput" onChange={handleChange} className="plus-answer"/>
      </form>
      <h2>You got <span className="result-number" style={{ color: 'green' }}>{results.length}</span> right! </h2>
    </div>
  )
}

export default Plus
