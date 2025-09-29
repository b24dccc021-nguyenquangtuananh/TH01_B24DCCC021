import React, { useState, useEffect } from "react";

function Bai2() {
  const colors = ["red", "green", "yellow"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial", textAlign: "left" }}>
      <h2>Bài 2: Đèn giao thông</h2>
      <div style={{ display: "flex", flexDirection: "column", width: "60px", margin: "10px 0" }}>
        {colors.map((c, idx) => (
          <div
            key={c}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              margin: "5px 0",
              backgroundColor: current === idx ? c : "lightgray",
            }}
          />
        ))}
      </div>
      <button onClick={handleNext}>Chuyển đèn</button>
    </div>
  );
}

export default Bai2;
