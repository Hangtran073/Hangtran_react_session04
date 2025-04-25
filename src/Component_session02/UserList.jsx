import React from "react";
import "../baitap5.css";

export default function UserList() {
  const users = [
    {
      id: 1,
      userName: "Malcolm Lockyer",
      dateOfBirth: "21/03/1961",
      gender: "Name",
      address: "New york",
    },
    {
      id: 2,
      userName: "Maria",
      dateOfBirth: "11/02/1990",
      gender: "Nữ",
      address: "London",
    },
  ];

  return (
    <>
      <h1>Danh sách</h1>
      <table>
        <thead>
          <tr>
            <td>STT</td>
            <td>Họ và tên</td>
            <td>Ngày sinh</td>
            <td> Giới tính</td>
            <td>Địa chỉ</td>
            <td cols={2}>Hành động</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>
                <button className="btn edit">Sửa</button>
                <button className="btn delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
