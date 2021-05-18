import React, { useState, useEffect } from 'react';
// import styles from './MainPage.module.css';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState({})
  const [toggleButton, setToggleButton] = useState(true)
  // const [category, setCategory] = useState('')

  const handleClick = () => {
    setToggleButton(!toggleButton)
  }

  

  useEffect(() => {
    ( async() => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=13&category=27&difficulty=easy&type=multiple`);
        setData(response.data.results);
        console.log(response)
        await setRandomQuestion(response.data.results[Math.floor(Math.random() * response.data.results.length)])
      } catch (err) {
        console.error(err)
      }
    })()
  }, [toggleButton])
  
  return (
    <div>
      <h1>This is the Main Page</h1>
      <h1>{randomQuestion.question}</h1>
      <button onClick={handleClick}>Get Question!</button>
    </div>
  )


}

export default MainPage;