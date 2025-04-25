import React, { useState } from "react";
import "../baitap02.css";

export default function ToggleInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const handleUse = () => {
    setIsVisible(!isVisible);
  };
  const content = 
   "Chào mừng bạn đến với thế giới React! Đây là đoạn văn được điều khiển bởi state `userState`";

  return (
    <>
      <div className="container">
        <h2>Ẩn/Hiện thông tin</h2>
        <button className="btn" onClick={handleUse}>
          {isVisible ? 'Ẩn thông tin' : 'Hiển thị thông tin'}
        </button>

        {isVisible && <p>{content}</p>}
      </div>
    </>
  );
}
