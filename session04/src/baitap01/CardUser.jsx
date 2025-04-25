import React from "react";
import "../baitap01.css";
import Card from "./Card";

export default function CardUser() {
  const users = [
    {
      name: "Trần Văn A",
      age: 21,
      img: "./img/ảnh 1.jpg",
    },
    {
      name: "Trần Thị B",
      age: 22,
      img: "./img/anh 2.jpg",
    },
    {
      name: "Lê Văn C",
      age: 23,
      img: "./img/anh 3.jpg",
    },
  ];
  return (
   
    <>
      <div className="parent">
        <h2>Danh sách người dùng</h2>   
        <div className="container" >
          {users.map((user)=>
           <div className="cardUser" >
           <img src={user.img} />
           <h5>{user.name}</h5>
           <p>Tuổi: {user.age}</p>
         </div>
          )}
         
        </div>
      </div>
    </>
  );
}
