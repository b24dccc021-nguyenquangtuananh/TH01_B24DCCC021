import React, { useState } from "react";

function Bai3() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Bài 3: Danh sách công việc</h2>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={addTask}>Thêm</button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {t}{" "}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai3;
