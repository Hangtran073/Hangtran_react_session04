import React, {useState} from 'react'

export default function CounText() {
    const [text, setText]=useState("");

    const handleChange =(e) => {
        setText(e.target.value);
    }
  return (
    <>
    <textarea 
        type="text"
        onChange={handleChange}
    />
    <p>Số kí tự: {text.length}</p>
    </>
    
  )
}
