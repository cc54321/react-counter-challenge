import React, { useState } from 'react';
import './App.css';

const MobileCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="container">
      <h1>React Mobile Counter</h1>
      <div className="counter">
        <button onClick={decrementCount}>Remove 1</button>
        <span>{count}</span>
        <button onClick={incrementCount}>Add 1</button>
      </div>
      <div className="stars">
        {[...Array(count)].map((_, index) => (
          <img key={index} src="logo192.png" alt="Star" />
        ))}
      </div>
    </div>
  );
};

export default MobileCounter;

