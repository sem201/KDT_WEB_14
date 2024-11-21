import React, { useState } from "react";

export default function Prac2() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정");

  function changeRed() {
    setColor("red");
    setText("빨강");
  }

  function changeBlue() {
    setColor("blue");
    setText("파란");
  }
  return (
    <div>
      <h1 style={{ color: color }}>{text}색 글씨</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}
