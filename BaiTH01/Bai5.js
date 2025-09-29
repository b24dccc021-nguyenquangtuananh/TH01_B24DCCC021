import React, { useState } from "react";

function Bai5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    let newErrors = {};
    if (!name) newErrors.name = "⚠️ Vui lòng nhập tên";
    if (!email) newErrors.email = "⚠️ Vui lòng nhập email";
    if (!password) newErrors.password = "⚠️ Vui lòng nhập mật khẩu";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData({ name, email, password });
    }
  };

  return (
    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
      <h2>Bài 5: Form Đăng ký</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Tên</label><br />
        <input
          type="text"
          placeholder="Nhập tên..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email</label><br />
        <input
          type="email"
          placeholder="Nhập email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Mật khẩu</label><br />
        <input
          type="password"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button onClick={handleSubmit}>Đăng ký</button>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p><strong>Tên:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mật khẩu:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default Bai5;
