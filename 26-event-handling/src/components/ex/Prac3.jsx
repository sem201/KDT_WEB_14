import React, { useState } from "react";

export default function Prac3() {
  const [msg, setMsg] = useState("사라져라");

  function changeState() {
    setMsg((prev) => (prev === "사라져라" ? "보여라" : "사라져라"));
  }
  return (
    <div>
      <button onClick={changeState}>{msg}</button>
      {msg === "보여라" ? <div></div> : <h1>안녕하세요</h1>}
    </div>
  );
}
