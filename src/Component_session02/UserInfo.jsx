import React from "react";

export default function UserInfo() {
  const info={
    name:"Nguyễn Văn A",
    sex:"Nam",
    birthday:"06/03/2024",
    email:"nva@gmail.com",
    address:"Thanh Xuân, Hà Nội"

  }
  return (
    <>
      <h1>Thong tin cá nhân</h1>
      <ul>
        <li>Họ và tên: <b>{info.name}</b></li>
        <li>Giới tính: <b>{info.sex}</b></li>
        <li>Ngày sinh: <b>{info.birthday}</b></li>
        <li>Emai: <b>{info.email}</b></li>
        <li>Địa chỉ: <b>{info.address}</b></li>
      </ul>
    </>
  );
}
