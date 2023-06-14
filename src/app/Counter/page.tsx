'use client'

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" onClick={decrement}>-</button>
        <span className="text-2xl">{count}</span>
        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
