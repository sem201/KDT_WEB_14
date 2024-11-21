import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg}`);
  };

  return (
    <div>
      <h1>Number Counter</h1>
      <h2>{number}</h2>

      {/* 함수에 인자가 없으면 함수 이름만 전달 */}
      <button onClick={increase}>더하기</button>

      {/* 함수에 인자 보내기 : 익명함수로 감싸서 처리 */}
      <button onClick={() => alertMsg("Hello~")}>alert 출력</button>
    </div>
  );
}
