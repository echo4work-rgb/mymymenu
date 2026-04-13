import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [dishes, setDishes] = useState([]);

  function addDish() {
    if (!input.trim()) return;
    const parts = input.split(/[，,\/]+/).map(s => s.trim()).filter(Boolean);
    setDishes(prev => [...prev, ...parts]);
    setInput("");
  }

  return (
    <div style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>家庭菜单 Demo</h1>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="输入菜名，用逗号分隔"
        style={{padding:10,width:300}}
      />
      <button onClick={addDish} style={{marginLeft:10}}>添加</button>

      <ul>
        {dishes.map((d,i)=>(
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
