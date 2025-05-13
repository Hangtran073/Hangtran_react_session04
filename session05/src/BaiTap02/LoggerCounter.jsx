import React, { useState } from 'react'
import { useEffect } from 'react';

export default function LoggerCounter() {
    const [count, setCount]=useState(0);

    // chạy khi count thay đổi

    useEffect(()=>{
        console.log("Giá trị count mới là:", count);
    }, [count]);

    // chỉ chạy một lần khi component mount

    useEffect(()=>{
        console.log("component đã được hiển thị!");
    },[]);

  return (
    <div style={{textAlign:"center", marginTop:"2rem"}}>
        <h2>Count:{count}</h2>
        <button onClick={()=> setCount(count+1)}>Tăng</button>
    </div>
  )
}
