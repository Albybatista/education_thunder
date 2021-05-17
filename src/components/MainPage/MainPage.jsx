import React, { useState, useEffect } from 'react';
// import styles from './MainPage.module.css';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    ( async() => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple`);
        setData(response.data.results);
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])
  
  return (
    <div>
      <h1>This is the Main Page</h1>
      {data.map((apiResult) => {
        return <li>{apiResult.question}</li>
      })}
    </div>
  )


}

export default MainPage;