import React from "react";

export default function Calculation() {
  const a = 10;
  const b = 10;

  const cong = (x, y) => x + y;
  const tru = (x, y) => x - y;
  const nhan = (x, y) => x * y;
  const chia = (x, y) => x / y;
  return (
    <>
      <h1>Danh sách kết quả</h1>
      <ol>
        <li>{`${a}+${b}=${cong(a, b)}`}</li>
        <li>{`${a}-${b}=${tru(a, b)}`}</li>
        <li>{`${a}*${b}=${nhan(a, b)}`}</li>
        <li>{`${a}/${b}=${chia(a, b)}`}</li>
      </ol>
    </>
  );
}
