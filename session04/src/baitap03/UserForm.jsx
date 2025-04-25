import React, { useState } from "react";
import "../baitap03.css";

export default function UserForm() {
  const [form, setForm] = useState({
    name:"",
    email:"",
    age:"",
  });
  
  const handleChange = (e)=>{
    const {name, value}=e.target;
    setForm((prev)=>({
      ...prev,
      [name]:value
    }));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin người dùng:", form);
  };

  return (
    <>
      <h2>Thông tin người dùng</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <label>Họ và tên</label>
          <br />
          <input type="text"
                 placeholder="Nhập họ tên"
                 name="name"
                 value={form.name} 
                 onChange={handleChange}
          />
        </div>
         <div className="group">
          <label>Email</label><br/>
          <input 
                type="text" 
                placeholder="Nhập email"
                name="email"
                value={form.email} 
                onChange={handleChange}        
                ></input>
        </div>
        <div className="group">
          <label>Tuổi</label><br/>
          <input type="text"
                 placeholder="Nhập tuổi"
                 name="age"
                 value={form.age} 
                 onChange={handleChange}
                 ></input>
        </div> 
        <button className="btn">Gửi</button>
      </form>
    </>
  );
}
