import React, { useState } from "react";

function Bai1() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const isOverLimit = text.length > 100;

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Bài 1 :Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        style={{ width: "300px", padding: "8px" }}
      />
      <p>
        Số ký tự: {text.length}
      </p>
      {isOverLimit && <p style={{ color: "red" }}>Vượt quá 100 ký tự!</p>}
    </div>
  );
}

export default Bai1;
