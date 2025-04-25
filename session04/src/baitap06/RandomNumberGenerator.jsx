import React, { useState } from 'react';
import "../baitap06.css"

export default function RandomNumberGenerator() {
  const [count, setCount]= useState(null);

  const handleClick=()=>{
    console.log("click");
    const randomNum=Math.floor(Math.random()*10)
    setCount(randomNum);
   

  }

  return (
    <div>
      <h2>🎲 Tạo số ngẫu nhiên(1 - 10)</h2>
      <button onClick={handleClick}>Tạo số</button>
      <p>{count !== null ? `Số của bạn là: ${count}` : "chưa có số nào được tạo"}</p>
    </div>
  )
}
