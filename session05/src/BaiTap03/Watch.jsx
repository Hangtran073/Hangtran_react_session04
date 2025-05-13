import React, { useRef, useState } from 'react'

export default function Watch() {
    const [seconds, setSeconds]=useState(0);
    const intervalRef=useRef(null);

    const start=()=>{
        if (intervalRef.current !==null ) return;
        intervalRef.current =setInterval(() => {
            setSeconds((prev)=>prev+1);
        }, 1000);
    };
    const stop=()=>{
        clearInterval(intervalRef.current);
        intervalRef.current=null;
       
    };
    const reset=()=>{
        stop();
        setSeconds(0);
    };

  return ( 
    <div style={{textAlign:"center", marginTop:"2rem"}}>
        <h2>{seconds} Giây</h2>
        <button onClick={start}>Bắt đầu</button>{" "}
        <button onClick={stop}>Stop</button>{" "}
        <button onClick={reset}>Reset</button>{" "}
    </div>
  )
}
