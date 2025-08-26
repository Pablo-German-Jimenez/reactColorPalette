import { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("");

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Color Switcher</h2>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "16px"
      }}>
        <input
          type="text"
          placeholder="Escribe un color o código ej: red, #ff0000"
          value={color}
          onChange={e => setColor(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
        <div
          style={{
            width: "60px",
            height: "60px",
            background: color || "#eee",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        ></div>
      </div>
    </div>
  );
}

export default ColorSwitcher;