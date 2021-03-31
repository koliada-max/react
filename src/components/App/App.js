import { useState, useCallback } from "react";
import Header from "../Header/Header";
import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";
import './App.css';
import React from "react";

function App() {
  const [userName, setUserName] = useState("John");
  const handleClick = useCallback(() => {
    if (userName === "John") {
      setUserName("Peter");
      }  else if (userName === "Peter") {
          setUserName("John");
      }
   }, [userName]);

   const [firstNumber, nextNumber] = useState('0');
   const incrementCount = () => nextNumber (+firstNumber+1);
   const decrementCount = () => {
     if (firstNumber > 0) {
       nextNumber(firstNumber-1);
     } else if (firstNumber === 0) {
      return firstNumber;
     }
   };

   const [startYear, nextYear] = useState('2021');
   const addYear = useCallback ( () => {
     nextYear(+startYear+1);
   }, [startYear]);

  return (
    <div className="app">
      <Header name={userName} />
      <h1>Hello {userName}</h1>
      <button onClick={handleClick}>
        Say hello to user
      </button>
      <br />

      <h1>Counter</h1>
      <button onClick={decrementCount}>-</button>
      <Counter number={firstNumber} />
      <button onClick={incrementCount}>+</button>
      <br />
      
      <button onClick={addYear}>
        Increase year
      </button>
      <Footer year={startYear} />
      
    </div>
  );

}

export default App;
